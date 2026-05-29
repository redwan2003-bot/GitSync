import { Hono } from "hono";
import { getPrisma } from "@GitSync/db";
import { Env } from "../index";

const githubAppRouter = new Hono<{ Bindings: Env }>();

/**
 * GitHub App Installation Callback
 * 
 * GitHub redirects here after a user installs the app.
 * URL: /integrations/github/callback?installation_id=XXX&setup_action=install&state=WORKSPACE_ID
 * 
 * You must set this as the GitHub App's "Setup URL" (Post Installation URL):
 *   https://reposignal-api.gitsync.workers.dev/integrations/github/callback
 * And enable "Redirect on update" in your GitHub App settings.
 */
githubAppRouter.get("/callback", async (c) => {
  const installationId = c.req.query("installation_id");
  const setupAction = c.req.query("setup_action"); // "install" | "update"
  const state = c.req.query("state"); // workspaceId we passed in the install URL

  const webUrl = c.env.WEB_APP_URL || "https://gitsyncweb.vercel.app";

  if (!installationId) {
    return c.redirect(`${webUrl}/dashboard?github=error&message=missing_installation_id`);
  }

  // If state (workspaceId) was not passed, we can't associate this installation.
  // The user will need to re-install via the button on the dashboard.
  if (!state) {
    return c.redirect(`${webUrl}/dashboard?github=error&message=missing_workspace_state`);
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
      return c.redirect(`${webUrl}/dashboard?github=error&message=workspace_not_found`);
    }

    const owner = workspace.members[0]?.user;

    // Check if an installation already exists for this workspace
    const existing = await prisma.gitHubInstallation.findFirst({
      where: { workspaceId: state },
    });

    if (existing) {
      // Update the existing record if re-installed
      await prisma.gitHubInstallation.update({
        where: { id: existing.id },
        data: {
          installationId: BigInt(installationId),
          accountLogin: owner?.name || owner?.email || "User",
        },
      });
    } else {
      // Create a new installation record
      await prisma.gitHubInstallation.create({
        data: {
          workspaceId: state,
          installationId: BigInt(installationId),
          accountLogin: owner?.name || owner?.email || "User",
          accountType: "User",
        },
      });
    }

    return c.redirect(`${webUrl}/dashboard?github=connected`);
  } catch (err: any) {
    console.error("GitHub App callback error:", err);
    return c.redirect(`${webUrl}/dashboard?github=error&message=${encodeURIComponent(err.message)}`);
  }
});

/**
 * GitHub App Connect Initiator
 * Redirects the user to the GitHub App installation page with
 * the workspaceId encoded as the `state` parameter.
 * 
 * URL: /integrations/github/connect?workspaceId=XXX
 */
githubAppRouter.get("/connect", (c) => {
  const workspaceId = c.req.query("workspaceId");
  const appName = c.env.GITHUB_APP_SLUG || "gitsync-engine";
  const webUrl = c.env.WEB_APP_URL || "https://gitsyncweb.vercel.app";

  if (!workspaceId) {
    return c.json({ error: "Missing workspaceId" }, 400);
  }

  const installUrl = `https://github.com/apps/${appName}/installations/new?state=${encodeURIComponent(workspaceId)}`;
  return c.redirect(installUrl);
});

export { githubAppRouter };
