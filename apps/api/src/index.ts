import { Hono } from "hono";
import { cors } from "hono/cors";
import { createPostHogClient } from "./posthog";
import { getPrisma } from "@GitSync/db";

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
    // In a full implementation, we'd import AiGenerationService from @GitSync/ai
    // For this migration MVP, we handle the state updates:
    
    for (const msg of batch.messages) {
      if (batch.queue === "reposignal-github-events") {
        const { deliveryId, event } = msg.body;
        
        try {
          // Process webhook delivery
          await prisma.webhookDelivery.update({
            where: { deliveryId },
            data: { status: "PROCESSED", processedAt: new Date() },
          });
          
          // NOTE: Normally here we'd run AI generation logic and create a ContentDraft.
          // Since we are porting the base MVP, we mark it as processed successfully.
          
          msg.ack();
        } catch (error: any) {
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
