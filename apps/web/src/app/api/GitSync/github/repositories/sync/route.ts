import { NextRequest, NextResponse } from 'next/server';
import { auth } from '../../../../../../auth';
import { prisma } from '@GitSync/db';
import { checkRateLimit } from '../../../../../../lib/rate-limit';
import { syncPublicRepositoriesForInstallation } from '@GitSync/integrations';

export async function POST(request: NextRequest) {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Rate limiting: 10 requests per minute per user
    const rateLimitCheck = checkRateLimit(`github-repo-sync:${session.user.id}`, 10, 60);
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

    const userId = session.user.id;

    // Get current workspace
    const workspaceMember = await prisma.workspaceMember.findFirst({
      where: { userId },
    });

    if (!workspaceMember) {
      return NextResponse.json(
        { error: 'User not in any workspace' },
        { status: 400 }
      );
    }

    const workspaceId = workspaceMember.workspaceId;

    // Find GitHubInstallation for workspace
    const installation = await prisma.gitHubInstallation.findFirst({
      where: { workspaceId },
      orderBy: { createdAt: 'desc' },
    });

    if (!installation) {
      return NextResponse.json(
        { error: 'GitHub App is not connected to this workspace' },
        { status: 404 }
      );
    }

    let syncResult;
    try {
      syncResult = await syncPublicRepositoriesForInstallation(workspaceId, installation.installationId.toString());
    } catch (e) {
      console.error('Sync error details:', e);
      return NextResponse.json({
        error: 'Sync failed',
        message: e instanceof Error ? e.message : String(e),
      }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      ...syncResult,
    });
  } catch (error) {
    console.error('GitHub repositories sync endpoint error:', error);
    return NextResponse.json(
      {
        error: 'Internal server error',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
