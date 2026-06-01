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
        hasGitHub: false,
        message: 'GitHub App not installed',
      });
    }

    // Return installation info
    // Full repo list would require GitHub API call via backend
    return successResponse({
      repos: [],
      hasGitHub: true,
      installationCount: githubInstallations.length,
      message: 'GitHub App is connected but full repo list requires backend GitHub API call',
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
