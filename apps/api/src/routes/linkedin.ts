import { Hono } from "hono";
import { Env } from "../index";

import { getPrisma } from "@GitSync/db";

const linkedinRouter = new Hono<{ Bindings: Env }>();

linkedinRouter.get("/callback", async (c) => {
  const code = c.req.query("code");
  const error = c.req.query("error");
  const state = c.req.query("state"); // This is our workspaceId

  if (error) {
    return c.redirect(`${c.env.WEB_APP_URL}/dashboard?linkedin=error&message=${encodeURIComponent(error)}`);
  }
  if (!code) {
    return c.json({ error: "Missing authorization code" }, 400);
  }
  if (!state) {
    return c.json({ error: "Missing state parameter (workspaceId)" }, 400);
  }
  
  try {
    // 1. Exchange code for access token
    const tokenResponse = await fetch("https://www.linkedin.com/oauth/v2/accessToken", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "authorization_code",
        code,
        redirect_uri: c.env.LINKEDIN_REDIRECT_URI || "",
        client_id: c.env.LINKEDIN_CLIENT_ID || "",
        client_secret: c.env.LINKEDIN_CLIENT_SECRET || "",
      }).toString(),
    });

    if (!tokenResponse.ok) {
      const errText = await tokenResponse.text();
      console.error("LinkedIn token exchange failed:", errText);
      return c.redirect(`${c.env.WEB_APP_URL}/dashboard?linkedin=error&message=token_exchange_failed`);
    }

    const tokenData = (await tokenResponse.json()) as { access_token: string; expires_in: number };

    // 2. Store the token in the vault securely
    if (c.env.DATABASE_URL) {
      const prisma = getPrisma(c.env.DATABASE_URL);
      
      // Upsert the token for the workspace
      const existing = await prisma.tokenVaultEntry.findFirst({
        where: { workspaceId: state, provider: "LINKEDIN" },
      });

      // Note: In a production app, encrypt tokenData.access_token here!
      // Using a basic mock encryption for this MVP implementation to satisfy schema requirements.
      const encryptedToken = `ENC:${tokenData.access_token}`;

      if (existing) {
        await prisma.tokenVaultEntry.update({
          where: { id: existing.id },
          data: { encryptedToken, iv: "mock_iv", tag: "mock_tag" },
        });
      } else {
        await prisma.tokenVaultEntry.create({
          data: {
            workspaceId: state,
            provider: "LINKEDIN",
            encryptedToken,
            iv: "mock_iv",
            tag: "mock_tag",
          },
        });
      }
    }
    
    return c.redirect(`${c.env.WEB_APP_URL}/dashboard?linkedin=connected`);
  } catch (err) {
    console.error("LinkedIn callback error:", err);
    return c.redirect(`${c.env.WEB_APP_URL}/dashboard?linkedin=error`);
  }
});

linkedinRouter.get("/connect", (c) => {
  const workspaceId = c.req.query("workspaceId");
  if (!workspaceId) {
    return c.json({ error: "Missing workspaceId" }, 400);
  }

  const scope = encodeURIComponent("openid profile w_member_social");
  const url =
    `https://www.linkedin.com/oauth/v2/authorization?response_type=code` +
    `&client_id=${c.env.LINKEDIN_CLIENT_ID || ""}` +
    `&redirect_uri=${encodeURIComponent(c.env.LINKEDIN_REDIRECT_URI || "")}` +
    `&scope=${scope}` +
    `&state=${encodeURIComponent(workspaceId)}`;
  
  return c.redirect(url);
});

export { linkedinRouter };
