import { Hono } from "hono";
import { getPrisma } from "@GitSync/db";
import { Env } from "../index";

const githubRouter = new Hono<{ Bindings: Env }>();

githubRouter.post("/webhooks/github", async (c) => {
  const deliveryId = c.req.header("x-github-delivery");
  const event = c.req.header("x-github-event");
  const signature = c.req.header("x-hub-signature-256");

  if (!deliveryId || !event) {
    return c.json({ error: "Missing required headers" }, 400);
  }

  // Read raw body as ArrayBuffer for crypto verification
  const rawBodyBuffer = await c.req.arrayBuffer();
  
  // Verify signature using Web Crypto API
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(c.env.GITHUB_WEBHOOK_SECRET),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["verify"]
  );

  // Convert hex signature from GitHub to Uint8Array
  const sigHex = signature?.replace("sha256=", "") || "";
  const sigBytes = new Uint8Array(sigHex.match(/.{1,2}/g)?.map((byte) => parseInt(byte, 16)) || []);

  try {
    const isValid = await crypto.subtle.verify(
      "HMAC",
      key,
      sigBytes,
      rawBodyBuffer
    );
    if (!isValid) {
      return c.json({ error: "Invalid signature" }, 401);
    }
  } catch (e) {
    return c.json({ error: "Signature verification failed" }, 401);
  }

  const decoder = new TextDecoder();
  const rawBodyText = decoder.decode(rawBodyBuffer);
  
  let payload;
  try {
    payload = JSON.parse(rawBodyText);
  } catch (e) {
    return c.json({ error: "Invalid JSON" }, 400);
  }

  const prisma = getPrisma(c.env.DATABASE_URL);

  const expiresAt = new Date();
  expiresAt.setDate(expiresAt.getDate() + parseInt(c.env.WEBHOOK_RETENTION_DAYS || "90"));

  const existing = await prisma.webhookDelivery.findUnique({
    where: { deliveryId },
  });

  if (existing) {
    return c.json({ received: true, duplicate: true, queued: false });
  }

  await prisma.webhookDelivery.create({
    data: {
      deliveryId,
      event,
      payload: payload as object,
      status: "PENDING",
      expiresAt,
    },
  });

  // Enqueue to Cloudflare Queues
  await c.env.CF_QUEUE_GITHUB_EVENTS.send({
    deliveryId,
    event,
  });

  return c.json({ received: true, duplicate: false, queued: true });
});

export { githubRouter };
