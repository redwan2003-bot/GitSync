import { App } from 'octokit';
import { prisma } from '@GitSync/db';

const getGitHubApp = () => {
  const appId = process.env.GITHUB_APP_ID;
  const privateKey = process.env.GITHUB_APP_PRIVATE_KEY?.replace(/\\n/g, '\n');
  const clientId = process.env.GITHUB_APP_CLIENT_ID;

  if (!appId || !privateKey) {
    throw new Error('Missing GitHub App environment variables');
  }

  return new App({
    appId,
    privateKey,
    ...(clientId && process.env.GITHUB_APP_CLIENT_SECRET ? {
      oauth: {
        clientId,
        clientSecret: process.env.GITHUB_APP_CLIENT_SECRET,
      }
    } : {})
  });
};

export async function syncPublicRepositoriesForInstallation(
  workspaceId: string,
  installationIdStr: string | number | bigint
) {
  try {
    const installationIdNum = Number(installationIdStr);
    const app = getGitHubApp();
    const octokit = await app.getInstallationOctokit(installationIdNum);

    let page = 1;
    const perPage = 100;
    let hasMore = true;
    let syncedCount = 0;
    let skippedPrivateCount = 0;
    const syncedRepoIds = new Set<bigint>();

    while (hasMore) {
      const response = await octokit.rest.apps.listReposAccessibleToInstallation({
        per_page: perPage,
        page,
      });

      const repos = response.data.repositories;
      
      if (repos.length < perPage) {
        hasMore = false;
      } else {
        page++;
      }

      for (const repo of repos) {
        if (repo.private || repo.visibility !== 'public') {
          skippedPrivateCount++;
          continue;
        }

        const githubRepoId = BigInt(repo.id);
        syncedRepoIds.add(githubRepoId);

        await prisma.repository.upsert({
          where: {
            workspaceId_githubRepoId: {
              workspaceId,
              githubRepoId,
            }
          },
          update: {
            owner: repo.owner.login,
            name: repo.name,
            fullName: repo.full_name,
            visibility: repo.visibility || 'public',
            description: repo.description,
            language: repo.language,
            defaultBranch: repo.default_branch,
            htmlUrl: repo.html_url,
            fork: repo.fork,
            archived: repo.archived,
            disabled: repo.disabled,
            pushedAt: repo.pushed_at ? new Date(repo.pushed_at) : null,
            syncStatus: 'SUCCESS',
            lastSyncedAt: new Date(),
          },
          create: {
            workspaceId,
            githubRepoId,
            owner: repo.owner.login,
            name: repo.name,
            fullName: repo.full_name,
            visibility: repo.visibility || 'public',
            description: repo.description,
            language: repo.language,
            defaultBranch: repo.default_branch,
            htmlUrl: repo.html_url,
            fork: repo.fork,
            archived: repo.archived,
            disabled: repo.disabled,
            pushedAt: repo.pushed_at ? new Date(repo.pushed_at) : null,
            syncStatus: 'SUCCESS',
            lastSyncedAt: new Date(),
            enabled: true, // Auto-enable public repos on first sync
          }
        });

        syncedCount++;
      }
    }

    // Find all repos for this workspace that weren't in this sync and mark them as disabled/stale
    if (syncedRepoIds.size > 0) {
      await prisma.repository.updateMany({
        where: {
          workspaceId,
          githubRepoId: {
            notIn: Array.from(syncedRepoIds)
          }
        },
        data: {
          disabled: true,
          syncStatus: 'STALE',
        }
      });
    }

    return {
      ok: true,
      syncedCount,
      skippedPrivateCount,
      syncedAt: new Date().toISOString()
    };
  } catch (e) {
    console.error('Error in syncPublicRepositoriesForInstallation:', e);
    // Re-throw so the API handler can return a 500 with details
    throw e;
  }
}
