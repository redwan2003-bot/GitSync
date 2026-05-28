import { Hono } from "hono";
import { getPrisma } from "@GitSync/db";
import { Env } from "../index";
import { internalAuthMiddleware } from "../auth/middleware";

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

  const updated = await prisma.$transaction(async (tx) => {
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

draftsRouter.post("/:id/publish", async (c) => {
  const auth = c.get("auth");
  const id = c.req.param("id");
  const prisma = getPrisma(c.env.DATABASE_URL);

  const draft = await prisma.contentDraft.findFirst({
    where: { id, workspaceId: auth.workspaceId },
    include: { repository: true },
  });

  if (!draft) return c.json({ error: "Draft not found" }, 404);
  if (!draft.generatedText?.trim()) return c.json({ error: "Cannot publish empty draft" }, 400);
  if (draft.status === "PUBLISHED") return c.json({ error: "Draft already published" }, 409);
  if (draft.requiresReview && draft.status !== "APPROVED") return c.json({ error: "Draft must be approved" }, 400);

  const repo = draft.repository;
  if (repo?.visibility === "private" && !repo.privateEnabled) {
    return c.json({ error: "Private repo publishing not enabled" }, 403);
  }

  // Simulate LinkedIn Publishing (port from linkedin.service.ts)
  await new Promise(resolve => setTimeout(resolve, 1500));
  const urn = `urn:li:share:${Math.floor(Math.random() * 1000000000)}`;

  try {
    const result = await prisma.$transaction(async (tx) => {
      const linkedInPost = await tx.linkedInPost.create({
        data: { draftId: id, urn },
      });
      const updatedDraft = await tx.contentDraft.update({
        where: { id },
        data: {
          status: "PUBLISHED",
          linkedInPostUrn: urn,
          publishedAt: new Date(),
        },
      });
      return { linkedInPost, updatedDraft };
    });

    await prisma.auditLog.create({
      data: {
        workspaceId: auth.workspaceId,
        userId: auth.userId,
        action: "DRAFT_PUBLISHED",
        resourceType: "content_draft",
        resourceId: id,
        metadata: { urn }
      }
    });

    return c.json(result.updatedDraft);
  } catch (error) {
    return c.json({ error: "Publish failed" }, 502);
  }
});

export { draftsRouter };
