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

    // Rate limiting: 120 requests per minute per user
    const rateLimitCheck = checkRateLimit(`metrics:${session.user.id}`, 120, 60);
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

    const [repos, drafts, published, failedSyncs] = await Promise.all([
      prisma.gitHubInstallation.count({
        where: { workspaceId: workspace.workspaceId },
      }),
      prisma.contentDraft.count({
        where: {
          workspaceId: workspace.workspaceId,
          status: 'DRAFT_PENDING',
        },
      }),
      prisma.auditLog.count({
        where: {
          workspaceId: workspace.workspaceId,
          action: 'PUBLISHED',
        },
      }),
      prisma.webhookDelivery.count({
        where: {
          workspaceId: workspace.workspaceId,
          status: 'FAILED',
          createdAt: {
            gte: new Date(Date.now() - 24 * 60 * 60 * 1000),
          },
        },
      }),
    ]);

    return NextResponse.json({
      repositoriesCount: repos,
      draftsAwaitingReview: drafts,
      publishedPostsCount: published,
      failedSyncsCount: failedSyncs,
    });
  } catch (error) {
    console.error('Dashboard metrics error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
