import { createMiddleware } from "hono/factory";
import { Env } from "../index";

export type AuthContext = {
  userId: string;
  workspaceId: string;
  userEmail: string;
};

export const internalAuthMiddleware = createMiddleware<{ Bindings: Env; Variables: { auth: AuthContext } }>(
  async (c, next) => {
    const userId = c.req.header("x-user-id");
    const workspaceId = c.req.header("x-workspace-id");
    const timestamp = c.req.header("x-request-timestamp");
    const signature = c.req.header("x-internal-signature");

    if (!userId || !workspaceId || !timestamp || !signature) {
      return c.json({ error: "Missing authentication headers" }, 401);
    }

    const ts = Number(timestamp);
    if (!Number.isFinite(ts) || Math.abs(Date.now() - ts) > 5 * 60 * 1000) {
      return c.json({ error: "Request timestamp expired" }, 401);
    }

    const encoder = new TextEncoder();
    const key = await crypto.subtle.importKey(
      "raw",
      encoder.encode(c.env.INTERNAL_API_SECRET || ""),
      { name: "HMAC", hash: "SHA-256" },
      false,
      ["sign"]
    );

    const dataToSign = `${userId}:${workspaceId}:${timestamp}`;
    const signatureBuffer = await crypto.subtle.sign(
      "HMAC",
      key,
      encoder.encode(dataToSign)
    );

    const expectedHex = Array.from(new Uint8Array(signatureBuffer))
      .map(b => b.toString(16).padStart(2, "0"))
      .join("");

    if (expectedHex !== signature) {
      return c.json({ error: "Invalid request signature" }, 401);
    }

    c.set("auth", {
      userId,
      workspaceId,
      userEmail: c.req.header("x-user-email") ?? "",
    });

    await next();
  }
);
