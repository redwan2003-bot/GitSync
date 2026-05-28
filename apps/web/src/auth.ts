import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma, ensureUserWorkspace } from "@GitSync/db";
import { authConfig } from "./auth.config";

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "database",
  },
  callbacks: {
    async session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;
        const membership = await prisma.workspaceMember.findFirst({
          where: { userId: user.id },
          select: { workspaceId: true },
        });
        if (membership) {
          (session as { workspaceId?: string }).workspaceId =
            membership.workspaceId;
        }
      }
      return session;
    },
  },
  events: {
    async createUser({ user }) {
      if (user.id && user.email) {
        await ensureUserWorkspace(user.id, user.email, user.name);
      }
    },
  },
  trustHost: process.env.AUTH_TRUST_HOST === "true",
});
