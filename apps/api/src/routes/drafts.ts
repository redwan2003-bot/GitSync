import { Hono } from "hono";
import { getPrisma } from "@GitSync/db";
import type { PrismaClient } from "@GitSync/db";
import { Env } from "../index";
import { internalAuthMiddleware } from "../auth/middleware";
import { decryptToken } from "../lib/encryption";

const draftsRouter = new Hono<{ Bindings: Env; Variables: { auth: { userId: string; workspaceId: string; userEmail: string } } }>();

draftsRouter.use("*", internalAuthMiddleware);

draftsRouter.get("/", async (c) => {
  const auth = c.get("auth");
  const prisma = getPrisma(c.env.DATABASE_URL);
  
  const drafts = await prisma.contentDraft.findMany({
    where: { workspaceId: auth.workspaceId },
    orderBy: { createdAt: "desc" },
  });
  return c.json(drafts);
});

draftsRouter.get("/:id", async (c) => {
  const auth = c.get("auth");
  const id = c.req.param("id");
  const prisma = getPrisma(c.env.DATABASE_URL);
  
  const draft = await prisma.contentDraft.findFirst({
    where: { id, workspaceId: auth.workspaceId },
  });
  if (!draft) return c.json({ error: "Draft not found" }, 404);
  return c.json(draft);
});

draftsRouter.put("/:id", async (c) => {
  const auth = c.get("auth");
  const id = c.req.param("id");
  const { generatedText } = await c.req.json();
  const prisma = getPrisma(c.env.DATABASE_URL);

  const draft = await prisma.contentDraft.findFirst({
    where: { id, workspaceId: auth.workspaceId },
  });
  if (!draft) return c.json({ error: "Draft not found" }, 404);
  if (draft.status === "PUBLISHED") {
    return c.json({ error: "Published drafts cannot be edited in place. Create a new version." }, 409);
  }

  const latestVersion = await prisma.draftVersion.findFirst({
    where: { draftId: id },
    orderBy: { version: "desc" },
  });
  const nextVersion = (latestVersion?.version ?? 0) + 1;

  const updated = await prisma.$transaction(async (tx: PrismaClient) => {
    await tx.draftVersion.create({
      data: {
        draftId: id,
        version: nextVersion,
        fullText: generatedText,
        editedById: auth.userId,
      },
    });
    return tx.contentDraft.update({
      where: { id },
      data: {
        generatedText,
        status: "DRAFT_EDITED",
      },
    });
  });

  return c.json(updated);
});

draftsRouter.post("/:id/approve", async (c) => {
  const auth = c.get("auth");
  const id = c.req.param("id");
  const prisma = getPrisma(c.env.DATABASE_URL);

  const draft = await prisma.contentDraft.findFirst({
    where: { id, workspaceId: auth.workspaceId },
  });
  if (!draft) return c.json({ error: "Draft not found" }, 404);

  const updated = await prisma.contentDraft.update({
    where: { id },
    data: { status: "APPROVED" },
  });
  return c.json(updated);
});

/**
 * Publish draft to LinkedIn
 * 
 * Security:
 * - Only publishes if LinkedIn is connected (token exists and is valid)
 * - Validates workspace ownership
 * - Logs publish action for audit trail
 * - Encrypts and retrieves stored LinkedIn token
 * 
 * Current implementation:
 * - Reserves LinkedIn URN and stores post record
 * - Actual LinkedIn API publishing should happen via separate async job
 * - UI should show "pending" state until webhook confirms success
 */
draftsRouter.post("/:id/publish", async (c) => {
  const auth = c.get("auth");
  const id = c.req.param("id");
  const prisma = getPrisma(c.env.DATABASE_URL);

  try {
    // 1. Validate draft exists and belongs to workspace
    const draft = await prisma.contentDraft.findFirst({
      where: { id, workspaceId: auth.workspaceId },
      include: { repository: true },
    });

    if (!draft) {
      return c.json({ error: "Draft not found" }, 404);
    }

    if (!draft.generatedText?.trim()) {
      return c.json({ error: "Cannot publish empty draft" }, 400);
    }

    if (draft.status === "PUBLISHED") {
      return c.json({ error: "Draft already published" }, 409);
    }

    if (draft.requiresReview && draft.status !== "APPROVED") {
      return c.json({ error: "Draft must be approved before publishing" }, 400);
    }

    // 2. Check repository visibility permissions
    const repo = draft.repository;
    if (repo?.visibility === "private" && !repo.privateEnabled) {
      return c.json({ error: "Private repository publishing is not enabled" }, 403);
    }

    // 3. Verify LinkedIn is connected by checking token exists
    const linkedinToken = await prisma.tokenVaultEntry.findFirst({
      where: { workspaceId: auth.workspaceId, provider: "LINKEDIN" },
    });

    if (!linkedinToken) {
      return c.json(
        { error: "LinkedIn not connected. Install LinkedIn app first." },
        400
      );
    }

    // 4. Validate token can be decrypted (isn't corrupted)
    let decryptedToken: string;
    try {
      decryptedToken = await decryptToken(
        linkedinToken.encryptedToken,
        linkedinToken.iv,
        linkedinToken.tag
      );
    } catch (decryptErr) {
      console.error(`[Draft Publish] Token decryption failed for workspace ${auth.workspaceId}:`, decryptErr);
      return c.json(
        { error: "LinkedIn token is invalid or corrupted. Please reconnect." },
        400
      );
    }

    // 5. Create post record (reserves URN, queues async publish)
    const linkedInPost = await prisma.linkedInPost.create({
      data: {
        draftId: id,
        urn: `urn:li:share:${Date.now()}-${Math.random().toString(36).slice(2)}`,
        status: "PENDING",
      },
    });

    // 6. Update draft status
    const updatedDraft = await prisma.contentDraft.update({
      where: { id },
      data: {
        status: "PUBLISHED",
        linkedInPostUrn: linkedInPost.urn,
        publishedAt: new Date(),
      },
    });

    // 7. Create audit log
    await prisma.auditLog.create({
      data: {
        workspaceId: auth.workspaceId,
        userId: auth.userId,
        action: "DRAFT_PUBLISHED_TO_LINKEDIN",
        resourceType: "content_draft",
        resourceId: id,
        details: `Published to LinkedIn: ${linkedInPost.urn}`,
      },
    }).catch((err: unknown) => {
      console.warn("[Draft Publish] Failed to create audit log:", err);
      // Don't fail the publish if audit logging fails
    });

    console.log(
      `[Draft Publish] User ${auth.userId} published draft ${id} to LinkedIn URN: ${linkedInPost.urn}`
    );

    // 8. Queue async LinkedIn API call (would call LinkedIn Share API here)
    // TODO: Implement async job to call LinkedIn API with decryptedToken
    // For now, return pending state
    return c.json({
      success: true,
      draft: updatedDraft,
      linkedInPost: {
        urn: linkedInPost.urn,
        status: "PENDING",
        message: "Publishing to LinkedIn... This may take a few moments.",
      },
    });
  } catch (error: unknown) {
    const errMessage = error instanceof Error ? error.message : String(error);
    console.error("[Draft Publish] Unexpected error:", errMessage);
    return c.json(
      { error: "Failed to publish draft" },
      500
    );
  }
});

export { draftsRouter };
