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

    // Fetch pending drafts (awaiting review)
    const pendingDrafts = await prisma.contentDraft.findMany({
      where: {
        workspaceId: workspace.workspaceId,
        status: 'PENDING_REVIEW', // Awaiting review status
      },
      select: {
        id: true,
        title: true,
        createdAt: true,
      },
      orderBy: { createdAt: 'desc' },
      take: 10,
    });

    return NextResponse.json({
      data: pendingDrafts,
    });
  } catch (error) {
    console.error('Pending drafts error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
