import { NextRequest, NextResponse } from 'next/server';
import { auth } from '../../../../../auth';
import { prisma } from '@GitSync/db';
import { checkRateLimit } from '../../../../../lib/rate-limit';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(_request: NextRequest) {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      console.log('[pending-drafts] Unauthorized - no session');
      return NextResponse.json(
        { data: [] },
        { status: 200 }
      );
    }

    // Rate limiting: 60 requests per minute per user
    const rateLimitCheck = checkRateLimit(`pending-drafts:${session.user.id}`, 60, 60);
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
      console.log(`[pending-drafts] No workspace for user ${session.user.id}`);
      return NextResponse.json(
        { data: [] },
        { status: 200 }
      );
    }

    console.log(`[pending-drafts] Fetching drafts for workspace ${workspace.workspaceId}`);

    // Fetch pending drafts with status DRAFT_PENDING
    const pendingDrafts = await prisma.contentDraft.findMany({
      where: {
        workspaceId: workspace.workspaceId,
        status: 'DRAFT_PENDING', // Correct status value
      },
      select: {
        id: true,
        generatedText: true, // Use generatedText as title
        createdAt: true,
      },
      orderBy: { createdAt: 'desc' },
      take: 10,
    });

    console.log(`[pending-drafts] Found ${pendingDrafts.length} drafts`);

    return NextResponse.json({
      data: pendingDrafts.map((d: { id: string; generatedText: string | null; createdAt: Date }) => ({
        id: d.id,
        title: d.generatedText?.substring(0, 100) || 'Untitled Draft',
        createdAt: d.createdAt,
      })),
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    const stack = error instanceof Error ? error.stack : '';
    console.error('[pending-drafts] Error:', message);
    console.error('[pending-drafts] Stack:', stack);
    
    // Return empty array instead of 500 to not break dashboard
    return NextResponse.json(
      { data: [] },
      { status: 200 }
    );
  }
}
