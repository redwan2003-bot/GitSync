import { PrismaClient } from "@prisma/client";
import { Pool, neonConfig } from "@neondatabase/serverless";
import { PrismaNeon } from "@prisma/adapter-neon";
import ws from "ws";

// Set up WebSocket for Node.js environments (Next.js)
if (typeof WebSocket === "undefined" && typeof ws !== "undefined") {
  neonConfig.webSocketConstructor = ws;
}

// Node environment (process available)
let prisma;
if (typeof process !== "undefined" && process.env?.DATABASE_URL) {
  const { PrismaClient } = require("@prisma/client");
  const connectionString = process.env.DATABASE_URL;
  const pool = new Pool({ connectionString });
  const adapter = new PrismaNeon(pool);
  prisma = new PrismaClient({
    adapter,
    log: process.env.NODE_ENV === "development" ? ["error", "warn"] : ["error"],
  });
} else {
  // Edge runtime (Cloudflare Workers) - no global Prisma instance.
  // Use getPrisma(databaseUrl) to obtain a client per request.
  prisma = undefined as any;
}

export { prisma };

// Factory for Workers: creates a new Prisma client per request using the provided DATABASE_URL
export function getPrisma(databaseUrl: string) {
  const { PrismaClient } = require("@prisma/client");
  const pool = new Pool({ connectionString: databaseUrl });
  const adapter = new PrismaNeon(pool);
  return new PrismaClient({ adapter });
}

export * from "@prisma/client";

/** Ensures every authenticated user has a personal workspace. */
export async function ensureUserWorkspace(
  userId: string,
  email: string,
  name?: string | null,
): Promise<{ workspaceId: string }> {
  const databaseUrl = (globalThis as any).DATABASE_URL;
  if (!databaseUrl) {
    throw new Error("DATABASE_URL is not defined in the Worker environment.");
  }
  const prisma = getPrisma(databaseUrl);

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
      members: { create: { userId, role: "OWNER" } },
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
