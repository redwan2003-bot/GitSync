import crypto from "crypto";

export function signInternalRequest(params: {
  userId: string;
  workspaceId: string;
  userEmail: string;
  secret: string;
}): Record<string, string> {
  const timestamp = String(Date.now());
  const signature = crypto
    .createHmac("sha256", params.secret)
    .update(`${params.userId}:${params.workspaceId}:${timestamp}`)
    .digest("hex");

  return {
    "x-user-id": params.userId,
    "x-workspace-id": params.workspaceId,
    "x-user-email": params.userEmail,
    "x-request-timestamp": timestamp,
    "x-internal-signature": signature,
  };
}
