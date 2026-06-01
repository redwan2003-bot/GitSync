import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/auth';
import { prisma } from '@GitSync/db';
import { checkRateLimit } from '@/lib/rate-limit';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(_request: NextRequest) {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Rate limiting: 30 requests per minute per user
    const rateLimitCheck = checkRateLimit(`github-repos:${session.user.id}`, 30, 60);
    if (!rateLimitCheck.allowed) {
      return NextResponse.json(
        { error: 'Rate limit exceeded' },
        {
          status: 429,
          headers: {
            'Retry-After': Math.ceil(
              (rateLimitCheck.resetAt.getTime() - Date.now()) / 1000
            ).toString(),
          },
        }
      );
    }

    const workspace = await prisma.workspaceMember.findFirst({
      where: { userId: session.user.id },
    });

    if (!workspace) {
      return NextResponse.json(
        { error: 'No workspace' },
        { status: 403 }
      );
    }

    // Check if GitHub App is installed
    const githubInstallations = await prisma.gitHubInstallation.findMany({
      where: { workspaceId: workspace.workspaceId },
    });

    if (githubInstallations.length === 0) {
      return NextResponse.json({
        repos: [],
        hasGitHub: false,
        message: 'No GitHub App installed',
      });
    }

    // Return installation info
    // Full repo list would require GitHub API call via backend
    return NextResponse.json({
      repos: [],
      hasGitHub: true,
      installationCount: githubInstallations.length,
      message: 'GitHub App is connected but full repo list requires backend GitHub API call',
    });
  } catch (error) {
    console.error('GitHub repos error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
