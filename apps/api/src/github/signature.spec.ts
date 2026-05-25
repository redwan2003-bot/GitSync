import {
  githubWebhookDigest,
  verifyGithubWebhookSignature,
} from "./signature";

describe("GitHub webhook signature", () => {
  const secret = "test_webhook_secret";
  const payload = Buffer.from(JSON.stringify({ zen: "test" }));

  it("computes sha256 digest", () => {
    const digest = githubWebhookDigest(payload, secret);
    expect(digest).toMatch(/^sha256=[a-f0-9]{64}$/);
  });

  it("accepts valid signatures", () => {
    const signature = githubWebhookDigest(payload, secret);
    expect(verifyGithubWebhookSignature(payload, signature, secret)).toBe(
      true,
    );
  });

  it("rejects invalid signatures", () => {
    expect(
      verifyGithubWebhookSignature(payload, "sha256=deadbeef", secret),
    ).toBe(false);
  });

  it("rejects missing signatures", () => {
    expect(verifyGithubWebhookSignature(payload, undefined, secret)).toBe(
      false,
    );
  });
});
