import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/auth';
import { prisma } from '@GitSync/db';

export async function GET(request: NextRequest) {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
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
