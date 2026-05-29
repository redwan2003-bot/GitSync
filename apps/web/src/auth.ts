import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma, ensureUserWorkspace } from "@GitSync/db";
import { authConfig } from "./auth.config";

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  adapter: PrismaAdapter(prisma),
  callbacks: {
    async jwt({ token, user }) {
      if (user && user.id) {
        token.id = user.id;
        const membership = await prisma.workspaceMember.findFirst({
          where: { userId: user.id },
          select: { workspaceId: true },
        });
        if (membership) {
          token.workspaceId = membership.workspaceId;
        }
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user && token.id) {
        session.user.id = token.id as string;
        if (token.workspaceId) {
          (session as { workspaceId?: string }).workspaceId = token.workspaceId as string;
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
