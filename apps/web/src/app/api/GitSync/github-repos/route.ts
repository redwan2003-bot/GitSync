import { NextRequest } from 'next/server';
import { auth } from '@/auth';
import { prisma } from '@GitSync/db';
import { checkRateLimit } from '@/lib/rate-limit';
import { successResponse, rateLimitErrorResponse, errorResponse, ErrorCodes } from '@/lib/api-response';

export async function GET(_request: NextRequest) {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return errorResponse(
        ErrorCodes.UNAUTHORIZED,
        'Authentication required',
        401
      );
    }

    // Rate limiting: 30 requests per minute per user
    const rateLimitCheck = checkRateLimit(`github-repos:${session.user.id}`, 30, 60);
    if (!rateLimitCheck.allowed) {
      return rateLimitErrorResponse(rateLimitCheck.resetAt);
    }

    const workspace = await prisma.workspaceMember.findFirst({
      where: { userId: session.user.id },
    });

    if (!workspace) {
      return errorResponse(
        ErrorCodes.FORBIDDEN,
        'No workspace found for user',
        403
      );
    }

    // Check if GitHub App is installed
    const githubInstallations = await prisma.gitHubInstallation.findMany({
      where: { workspaceId: workspace.workspaceId },
    });

    if (githubInstallations.length === 0) {
      return successResponse({
        repos: [],
        githubConnected: false,
        syncStatus: 'not_connected',
        syncedAt: null,
      });
    }

    const installation = githubInstallations[0];

    // Fetch repositories for the workspace that are not disabled/stale
    const repositories = await prisma.repository.findMany({
      where: {
        workspaceId: workspace.workspaceId,
        disabled: false,
      },
      orderBy: {
        updatedAt: 'desc',
      },
    });

    const isPending = repositories.length === 0;
    const isFailed = repositories.some((r: any) => r.syncStatus === 'FAILED');

    let syncStatus = 'success';
    if (isPending) syncStatus = 'pending';
    if (isFailed) syncStatus = 'failed';

    const lastSyncedAt = repositories.length > 0 
      ? repositories.reduce((latest: Date, r: any) => (r.lastSyncedAt && r.lastSyncedAt > latest ? r.lastSyncedAt : latest), new Date(0))
      : null;

    // Convert BigInt IDs to string for JSON serialization
    const serializedRepos = repositories.map((repo: any) => ({
      ...repo,
      githubRepoId: repo.githubRepoId.toString(),
    }));

    return successResponse({
      repositories: serializedRepos,
      githubConnected: true,
      syncStatus,
      syncedAt: lastSyncedAt?.toISOString() || null,
      // For v1, we can't easily know skipped private count from DB without keeping track of it in a separate model,
      // but we can pass an optional generic flag or rely on UI to just display the warning.
    });
  } catch (error) {
    console.error('GitHub repos error:', error);
    return errorResponse(
      ErrorCodes.INTERNAL_ERROR,
      'Failed to fetch GitHub repositories',
      500
    );
  }
}
