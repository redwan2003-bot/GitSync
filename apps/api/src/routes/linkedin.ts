import { Hono } from "hono";
import { Env } from "../index";
import { getPrisma } from "@GitSync/db";
import { encryptToken } from "../lib/encryption";

const linkedinRouter = new Hono<{ Bindings: Env }>();

/**
 * Validate workspace ID format (UUID v4)
 */
function isValidUUID(id: string): boolean {
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  return uuidRegex.test(id);
}

/**
 * LinkedIn OAuth Callback
 * 
 * Security:
 * - Validates state parameter (workspace ID) format
 * - Uses real AES-GCM token encryption (not mock values)
 * - Logs callback for audit trail
 * - Validates code parameter
 */
linkedinRouter.get("/callback", async (c) => {
  const code = c.req.query("code");
  const error = c.req.query("error");
  const state = c.req.query("state"); // workspace ID
  const webUrl = c.env.WEB_APP_URL || "https://gitsyncweb.vercel.app";

  // Handle OAuth errors from LinkedIn
  if (error) {
    console.warn(`[LinkedIn Callback] OAuth error: ${error}`);
    return c.redirect(`${webUrl}/dashboard?linkedin=error&message=${encodeURIComponent(error)}`);
  }

  // Validate authorization code
  if (!code || typeof code !== 'string' || code.length === 0) {
    console.warn("[LinkedIn Callback] Missing authorization code");
    return c.redirect(`${webUrl}/dashboard?linkedin=error&message=missing_code`);
  }

  // Validate state parameter
  if (!state || typeof state !== 'string') {
    console.warn("[LinkedIn Callback] Missing state parameter");
    return c.redirect(`${webUrl}/dashboard?linkedin=error&message=missing_state`);
  }

  // Validate workspace ID format
  if (!isValidUUID(state)) {
    console.warn(`[LinkedIn Callback] Invalid state format: ${state}`);
    return c.redirect(`${webUrl}/dashboard?linkedin=error&message=invalid_state_format`);
  }

  try {
    // 1. Exchange authorization code for access token
    if (!c.env.LINKEDIN_CLIENT_ID || !c.env.LINKEDIN_CLIENT_SECRET || !c.env.LINKEDIN_REDIRECT_URI) {
      console.error("[LinkedIn Callback] Missing LinkedIn credentials in env");
      return c.redirect(`${webUrl}/dashboard?linkedin=error&message=server_misconfigured`);
    }

    const tokenResponse = await fetch("https://www.linkedin.com/oauth/v2/accessToken", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "authorization_code",
        code,
        redirect_uri: c.env.LINKEDIN_REDIRECT_URI,
        client_id: c.env.LINKEDIN_CLIENT_ID,
        client_secret: c.env.LINKEDIN_CLIENT_SECRET,
      }).toString(),
    });

    if (!tokenResponse.ok) {
      const errText = await tokenResponse.text();
      console.error(`[LinkedIn Callback] Token exchange failed: ${tokenResponse.status} ${errText}`);
      return c.redirect(`${webUrl}/dashboard?linkedin=error&message=token_exchange_failed`);
    }

    const tokenData = (await tokenResponse.json()) as {
      access_token: string;
      expires_in: number;
    };

    if (!tokenData.access_token) {
      console.error("[LinkedIn Callback] No access token in response");
      return c.redirect(`${webUrl}/dashboard?linkedin=error&message=no_access_token`);
    }

    // 2. Encrypt and store the token
    let encryptionResult;
    try {
      encryptionResult = await encryptToken(tokenData.access_token);
    } catch (encErr) {
      console.error("[LinkedIn Callback] Token encryption failed:", encErr);
      return c.redirect(`${webUrl}/dashboard?linkedin=error&message=encryption_failed`);
    }

    // 3. Store encrypted token in database
    if (c.env.DATABASE_URL) {
      const prisma = getPrisma(c.env.DATABASE_URL);

      const existing = await prisma.tokenVaultEntry.findFirst({
        where: { workspaceId: state, provider: "LINKEDIN" },
      });

      if (existing) {
        await prisma.tokenVaultEntry.update({
          where: { id: existing.id },
          data: {
            encryptedToken: encryptionResult.encryptedToken,
            iv: encryptionResult.iv,
            tag: encryptionResult.tag,
          },
        });
        console.log(`[LinkedIn Callback] Updated token for workspace ${state}`);
      } else {
        await prisma.tokenVaultEntry.create({
          data: {
            workspaceId: state,
            provider: "LINKEDIN",
            encryptedToken: encryptionResult.encryptedToken,
            iv: encryptionResult.iv,
            tag: encryptionResult.tag,
          },
        });
        console.log(`[LinkedIn Callback] Created token for workspace ${state}`);
      }

      // Log audit event
      try {
        const workspace = await prisma.workspace.findFirst({
          where: { id: state },
          include: { members: { take: 1, select: { user: { select: { id: true, email: true } } } } },
        });
        const userId = workspace?.members[0]?.user?.id;

        await prisma.auditLog.create({
          data: {
            workspaceId: state,
            userId,
            action: "LINKEDIN_CONNECTED",
            resourceType: "LinkedInToken",
            metadata: { provider: "LINKEDIN" },
          },
        });
      } catch (auditErr) {
        console.warn("[LinkedIn Callback] Failed to create audit log:", auditErr);
        // Don't fail the whole operation if audit logging fails
      }
    }

    return c.redirect(`${webUrl}/dashboard?linkedin=connected&provider=linkedin`);
  } catch (err: any) {
    console.error("[LinkedIn Callback] Unexpected error:", err.message || err);
    return c.redirect(`${webUrl}/dashboard?linkedin=error&message=callback_error`);
  }
});

/**
 * LinkedIn OAuth Connect Initiator
 * Redirects user to LinkedIn authorization page with state parameter
 * 
 * Security:
 * - Validates workspace ID format before redirecting
 * - Prevents open redirect via state parameter validation
 */
linkedinRouter.get("/connect", (c) => {
  const workspaceId = c.req.query("workspaceId");

  if (!workspaceId || typeof workspaceId !== 'string') {
    return c.json({ error: "Missing workspaceId" }, 400);
  }

  // Validate workspace ID format
  if (!isValidUUID(workspaceId)) {
    console.warn(`[LinkedIn Connect] Invalid workspace ID format: ${workspaceId}`);
    return c.json({ error: "Invalid workspaceId format" }, 400);
  }

  if (!c.env.LINKEDIN_CLIENT_ID || !c.env.LINKEDIN_REDIRECT_URI) {
    console.error("[LinkedIn Connect] Missing LinkedIn config");
    return c.json({ error: "LinkedIn is not configured" }, 500);
  }

  // LinkedIn OAuth 2.0 authorization request
  // Scope: openid, profile for basic auth; w_member_social for post access
  const scope = encodeURIComponent("openid profile w_member_social");
  const url =
    `https://www.linkedin.com/oauth/v2/authorization?response_type=code` +
    `&client_id=${encodeURIComponent(c.env.LINKEDIN_CLIENT_ID)}` +
    `&redirect_uri=${encodeURIComponent(c.env.LINKEDIN_REDIRECT_URI)}` +
    `&scope=${scope}` +
    `&state=${encodeURIComponent(workspaceId)}`;

  console.log(`[LinkedIn Connect] Initiating OAuth for workspace: ${workspaceId}`);
  return c.redirect(url);
});

export { linkedinRouter };
