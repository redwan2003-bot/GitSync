import { Hono } from "hono";
import { cors } from "hono/cors";
import { createPostHogClient } from "./posthog";
import { getPrisma } from "@GitSync/db";
import OpenAI from "openai";

export type Env = {
  DATABASE_URL: string;
  GITHUB_WEBHOOK_SECRET: string;
  WEBHOOK_RETENTION_DAYS: string;
  CF_QUEUE_GITHUB_EVENTS: any;
  POSTHOG_TOKEN: string;
  POSTHOG_HOST: string;
  INTERNAL_API_SECRET?: string;
  WEB_APP_URL?: string;
  LINKEDIN_CLIENT_ID?: string;
  LINKEDIN_REDIRECT_URI?: string;
  LINKEDIN_CLIENT_SECRET?: string;
  GITHUB_APP_SLUG?: string;
  OPENROUTER_API_KEY?: string;
  OPENROUTER_MODEL?: string;
};

const app = new Hono<{ Bindings: Env }>();

app.use("*", cors());

app.get("/", (c) => {
  const posthog = createPostHogClient(c.env);
  c.executionCtx.waitUntil(
    posthog.captureImmediate({
      distinctId: "anonymous",
      event: "api_root_request",
      properties: { $current_url: c.req.url },
    }).then(() => posthog.shutdown())
  );
  return c.text("GitSync API (Cloudflare Worker)");
});

import { githubRouter } from "./routes/github";
import { draftsRouter } from "./routes/drafts";
import { accountRouter } from "./routes/account";
import { linkedinRouter } from "./routes/linkedin";
import { githubAppRouter } from "./routes/github-app";

app.route("/webhooks", githubRouter);
app.route("/drafts", draftsRouter);
app.route("/account", accountRouter);
app.route("/integrations/linkedin", linkedinRouter);
app.route("/integrations/github", githubAppRouter);

export default {
  fetch: app.fetch,
  
  async queue(batch: any, env: Env): Promise<void> {
    const prisma = getPrisma(env.DATABASE_URL);
    
    for (const msg of batch.messages) {
      if (batch.queue === "reposignal-github-events") {
        const { deliveryId, event } = msg.body;
        
        try {
          // Fetch the delivery to get the payload
          const delivery = await prisma.webhookDelivery.findUnique({
            where: { deliveryId },
          });

          if (!delivery || !delivery.workspaceId) {
            msg.ack();
            continue;
          }

          const workspaceId = delivery.workspaceId;
          const payload = delivery.payload as any;

          // Process webhook delivery
          await prisma.webhookDelivery.update({
            where: { deliveryId },
            data: { status: "PROCESSING", processedAt: new Date() },
          });

          let repoName = payload.repository?.name || 'unknown';
          let repoDesc = payload.repository?.description || '';
          let eventSummary = 'Activity detected';
          
          if (event === 'push') {
            const commits = payload.commits || [];
            eventSummary = `Pushed ${commits.length} commits. Latest: ${commits[0]?.message || 'updates'}`;
          } else if (event === 'release') {
            eventSummary = `New release published: ${payload.release?.name || payload.release?.tag_name || 'update'}`;
          }

          // Flag existing ProjectCard as STALE if it's a release or major push
          if (event === 'release') {
            const repositoryId = payload.repository?.id?.toString();
            if (repositoryId) {
              const repo = await prisma.repository.findUnique({
                where: { workspaceId_githubRepoId: { workspaceId, githubRepoId: BigInt(repositoryId) } }
              });
              if (repo) {
                await prisma.projectCard.updateMany({
                  where: { workspaceId, repositoryId: repo.id },
                  data: { syncStatus: 'STALE_NEEDS_UPDATE' }
                });
              }
            }
          }

          // Generate ContentDraft if OpenRouter is configured
          if (env.OPENROUTER_API_KEY && (event === 'push' || event === 'release')) {
            const model = env.OPENROUTER_MODEL || 'google/gemini-2.0-flash-lite-preview-02-05:free';
            const client = new OpenAI({
              apiKey: env.OPENROUTER_API_KEY,
              baseURL: 'https://openrouter.ai/api/v1',
            });

            const prompt = `Write a short, engaging LinkedIn feed post about a recent GitHub update for repository ${repoName}.
Event: ${eventSummary}
Repository Description: ${repoDesc}

Return JSON with "content" field containing the post text.`;

            const response = await client.chat.completions.create({
              model,
              messages: [
                { role: 'system', content: 'You write factual, professional updates for LinkedIn.' },
                { role: 'user', content: prompt }
              ],
              temperature: 0.3,
              response_format: { type: "json_object" }
            });

            const rawContent = response.choices[0]?.message?.content ?? '{"content": "Update"}';
            let postContent = 'Update';
            try {
              postContent = JSON.parse(rawContent).content;
            } catch (e) {
              console.error('Failed to parse AI response', rawContent);
            }

            // Save to ContentDraft
            const repositoryId = payload.repository?.id?.toString();
            let dbRepoId = null;
            if (repositoryId) {
              const repo = await prisma.repository.findUnique({
                where: { workspaceId_githubRepoId: { workspaceId, githubRepoId: BigInt(repositoryId) } }
              });
              if (repo) dbRepoId = repo.id;
            }

            const newDraft = await prisma.contentDraft.create({
              data: {
                workspaceId,
                repositoryId: dbRepoId,
                template: 'default',
                payloadJson: payload,
                generatedText: postContent,
                status: 'DRAFT_PENDING',
              }
            });

            // Create AuditLog
            await prisma.auditLog.create({
              data: {
                workspaceId,
                action: 'CREATED',
                resourceType: 'ContentDraft',
                resourceId: newDraft.id,
                details: `Generated draft from ${event} event on ${repoName}`,
              }
            });
          }

          // Mark as processed
          await prisma.webhookDelivery.update({
            where: { deliveryId },
            data: { status: "PROCESSED", processedAt: new Date() },
          });
          
          msg.ack();
        } catch (error: any) {
          console.error("Queue processing error:", error);
          await prisma.webhookDelivery.update({
            where: { deliveryId },
            data: { status: "FAILED", errorMessage: error.message },
          });
          msg.retry();
        }
      }
    }
  },
};
