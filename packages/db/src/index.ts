import { PrismaClient } from "@prisma/client";
import { Pool, neonConfig } from "@neondatabase/serverless";
import { PrismaNeon } from "@prisma/adapter-neon";
import ws from "ws";

// Set up WebSocket for Node.js environments (Next.js)
if (typeof WebSocket === "undefined" && typeof ws !== "undefined") {
  neonConfig.webSocketConstructor = ws;
}

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// Default instance for Next.js (uses process.env)
const connectionString = process.env.DATABASE_URL || "";
let adapter: PrismaNeon | undefined;

if (connectionString) {
  const pool = new Pool({ connectionString });
  adapter = new PrismaNeon(pool);
}

export const prisma: PrismaClient =
  globalForPrisma.prisma ??
  (new PrismaClient({
    adapter,
    log: process.env.NODE_ENV === "development" ? ["error", "warn"] : ["error"],
  }) as any);

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

// Factory for Cloudflare Workers (passes URL from env)
export function getPrisma(databaseUrl: string): PrismaClient {
  const pool = new Pool({ connectionString: databaseUrl });
  const adapter = new PrismaNeon(pool);
  return new PrismaClient({ adapter }) as any;
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
