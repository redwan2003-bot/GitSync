import { Hono } from "hono";
import { getPrisma } from "@GitSync/db";
import { Env } from "../index";
import { internalAuthMiddleware } from "../auth/middleware";

const accountRouter = new Hono<{ Bindings: Env; Variables: { auth: { userId: string; workspaceId: string; userEmail: string } } }>();

accountRouter.use("*", internalAuthMiddleware);

accountRouter.delete("/", async (c) => {
  const auth = c.get("auth");
  const prisma = getPrisma(c.env.DATABASE_URL);

  await prisma.auditLog.create({
    data: {
      workspaceId: auth.workspaceId,
      userId: auth.userId,
      action: "ACCOUNT_DELETED",
      resourceType: "user",
      resourceId: auth.userId,
    }
  });

  await prisma.user.delete({
    where: { id: auth.userId },
  });

  return new Response(null, { status: 204 });
});

export { accountRouter };
