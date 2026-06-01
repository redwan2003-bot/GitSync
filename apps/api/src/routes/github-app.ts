import { Hono } from "hono";
import { getPrisma } from "@GitSync/db";
import { Env } from "../index";

const githubAppRouter = new Hono<{ Bindings: Env }>();

/**
 * Validate workspace ID format (UUID v4)
 */
function isValidUUID(id: string): boolean {
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  return uuidRegex.test(id);
}

/**
 * GitHub App Installation Callback
 * 
 * GitHub redirects here after a user installs the app.
 * URL: /integrations/github/callback?installation_id=XXX&setup_action=install&state=WORKSPACE_ID
 * 
 * You must set this as the GitHub App's "Setup URL" (Post Installation URL):
 *   https://reposignal-api.gitsync.workers.dev/integrations/github/callback
 * And enable "Redirect on update" in your GitHub App settings.
 * 
 * Security:
 * - Validates workspace ID format
 * - Validates installation ID is numeric
 * - Logs all callbacks for audit trail
 */
githubAppRouter.get("/callback", async (c) => {
  const installationId = c.req.query("installation_id");
  const setupAction = c.req.query("setup_action"); // "install" | "update"
  const state = c.req.query("state"); // workspaceId we passed in the install URL

  const webUrl = c.env.WEB_APP_URL || "https://gitsyncweb.vercel.app";

  // Validate installation ID is numeric
  if (!installationId || !/^\d+$/.test(installationId)) {
    console.warn("[GitHub Callback] Invalid installation ID:", installationId);
    return c.redirect(`${webUrl}/dashboard?github=error&message=invalid_installation_id`);
  }

  // If state (workspaceId) was not passed, we can't associate this installation.
  if (!state) {
    console.warn("[GitHub Callback] Missing workspace state");
    return c.redirect(`${webUrl}/dashboard?github=error&message=missing_workspace_state`);
  }

  // Validate workspace ID format (UUID)
  if (!isValidUUID(state)) {
    console.warn("[GitHub Callback] Invalid workspace ID format:", state);
    return c.redirect(`${webUrl}/dashboard?github=error&message=invalid_workspace_format`);
  }

  try {
    const prisma = getPrisma(c.env.DATABASE_URL);

    // Find the workspace membership to get the user info
    const workspace = await prisma.workspace.findFirst({
      where: { id: state },
      include: {
        members: {
          take: 1,
          include: { user: true },
        },
      },
    });

    if (!workspace) {
      console.warn("[GitHub Callback] Workspace not found:", state);
      return c.redirect(`${webUrl}/dashboard?github=error&message=workspace_not_found`);
    }

    const owner = workspace.members[0]?.user;

    // Check if an installation already exists for this workspace
    const existing = await prisma.gitHubInstallation.findFirst({
      where: { workspaceId: state },
    });

    const accountLogin = owner?.name || owner?.email || "User";

    if (existing) {
      // Update the existing record if re-installed
      await prisma.gitHubInstallation.update({
        where: { id: existing.id },
        data: {
          installationId: BigInt(installationId),
          accountLogin: accountLogin.slice(0, 255),
        },
      });
      console.log(`[GitHub Callback] Updated installation ${installationId} for workspace ${state}`);
    } else {
      // Create a new installation record
      await prisma.gitHubInstallation.create({
        data: {
          workspaceId: state,
          installationId: BigInt(installationId),
          accountLogin: accountLogin.slice(0, 255),
          accountType: "User",
        },
      });
      console.log(`[GitHub Callback] Created installation ${installationId} for workspace ${state}`);
    }

    // Log callback for audit trail
    await prisma.auditLog.create({
      data: {
        workspaceId: state,
        userId: owner?.id || undefined,
        action: "GITHUB_APP_INSTALLED",
        resourceType: "GitHubInstallation",
        resourceId: installationId,
        metadata: { setup_action: setupAction },
      },
    }).catch(() => {
      // Silently fail if audit log fails, don't block installation
      console.warn("[GitHub Callback] Failed to create audit log");
    });

    return c.redirect(`${webUrl}/dashboard?github=connected&installation_id=${installationId}`);
  } catch (err: any) {
    console.error("[GitHub Callback] Error:", err.message || err);
    return c.redirect(`${webUrl}/dashboard?github=error&message=${encodeURIComponent("Installation failed")}`);
  }
});

/**
 * GitHub App Connect Initiator
 * Redirects the user to the GitHub App installation page with
 * the workspaceId encoded as the `state` parameter.
 * 
 * URL: /integrations/github/connect?workspaceId=XXX
 * 
 * Security:
 * - Validates workspace ID format before redirecting to GitHub
 * - Prevents arbitrary external redirects via state parameter
 */
githubAppRouter.get("/connect", (c) => {
  const workspaceId = c.req.query("workspaceId");
  const appName = c.env.GITHUB_APP_SLUG || "gitsync-engine";
  const webUrl = c.env.WEB_APP_URL || "https://gitsyncweb.vercel.app";

  if (!workspaceId) {
    return c.json({ error: "Missing workspaceId" }, 400);
  }

  // Validate workspace ID format (UUID)
  if (!isValidUUID(workspaceId)) {
    console.warn("[GitHub Connect] Invalid workspace ID format:", workspaceId);
    return c.json({ error: "Invalid workspaceId format" }, 400);
  }

  const installUrl = `https://github.com/apps/${appName}/installations/new?state=${encodeURIComponent(workspaceId)}`;
  console.log(`[GitHub Connect] Redirecting to GitHub install for workspace: ${workspaceId}`);
  return c.redirect(installUrl);
});

export { githubAppRouter };
