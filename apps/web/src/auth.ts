import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma, ensureUserWorkspace } from "@GitSync/db";
import { authConfig } from "./auth.config";

// Allowed callback URLs for redirects after sign-in
const allowedCallbackUrls = [
  process.env.NEXTAUTH_URL || "http://localhost:3000",
  "https://gitsyncweb.vercel.app",
];

function isValidCallbackUrl(url: string): boolean {
  try {
    const urlObj = new URL(url);
    return allowedCallbackUrls.some(allowed => {
      const allowedUrl = new URL(allowed);
      return urlObj.hostname === allowedUrl.hostname && 
             urlObj.protocol === allowedUrl.protocol;
    });
  } catch {
    return false;
  }
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  adapter: PrismaAdapter(prisma),
  // Session configuration: JWT tokens expire in 30 days
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60,   // Update every 24 hours
  },
  // JWT configuration: 30 day expiration
  jwt: {
    maxAge: 30 * 24 * 60 * 60,
  },
  callbacks: {
    async signIn({ user, account }) {
      // Only allow GitHub provider
      if (account?.provider !== "github") {
        return false;
      }
      // Ensure user has email
      if (!user.email) {
        console.warn("[Auth] Rejected sign-in: missing email");
        return false;
      }
      return true;
    },
    async redirect({ url, baseUrl }) {
      // Only allow redirects to allowed URLs or relative paths within baseUrl
      if (url.startsWith("/")) {
        return `${baseUrl}${url}`;
      }
      // Block redirects to external hosts
      if (new URL(url).origin === new URL(baseUrl).origin) {
        return url;
      }
      return baseUrl;
    },
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
    async signIn({ user, account }) {
      console.log(`[Auth] User signed in: ${user.email} via ${account?.provider}`);
    },
    async signOut() {
      console.log("[Auth] User signed out");
    },
  },
  trustHost: process.env.AUTH_TRUST_HOST === "true",
  debug: process.env.NODE_ENV !== "production",
});
