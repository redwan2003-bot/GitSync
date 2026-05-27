import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log:
      process.env.NODE_ENV === "development"
        ? ["error", "warn"]
        : ["error"],
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

export * from "@prisma/client";

/** Ensures every authenticated user has a personal workspace. */
export async function ensureUserWorkspace(
  userId: string,
  email: string,
  name?: string | null,
): Promise<{ workspaceId: string }> {
  const existing = await prisma.workspaceMember.findFirst({
    where: { userId },
    select: { workspaceId: true },
  });
  if (existing) {
    return { workspaceId: existing.workspaceId };
  }

  const workspace = await prisma.workspace.create({
    data: {
      name: name ? `${name}'s workspace` : `${email.split("@")[0]}'s workspace`,
      members: {
        create: { userId, role: "OWNER" },
      },
      settings: {
        create: {
          autoMode: "REVIEW_REQUIRED",
          maxPostsPerWeek: 3,
          privateReposEnabled: false,
        },
      },
    },
  });

  return { workspaceId: workspace.id };
}
