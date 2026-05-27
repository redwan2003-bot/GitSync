import * as crypto from "crypto";

export function githubWebhookDigest(
  rawBody: Buffer,
  secret: string,
): string {
  return (
    "sha256=" +
    crypto.createHmac("sha256", secret).update(rawBody).digest("hex")
  );
}

export function verifyGithubWebhookSignature(
  rawBody: Buffer,
  signature: string | undefined,
  secret: string,
): boolean {
  if (!signature) return false;
  const digest = githubWebhookDigest(rawBody, secret);
  const sigBuf = Buffer.from(signature);
  const digBuf = Buffer.from(digest);
  if (sigBuf.length !== digBuf.length) return false;
  return crypto.timingSafeEqual(sigBuf, digBuf);
}
