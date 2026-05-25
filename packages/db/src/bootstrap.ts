import { prisma } from "./index";

/**
 * Ensures every authenticated user has a personal workspace.
 */
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
