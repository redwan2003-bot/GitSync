import { NextRequest, NextResponse } from 'next/server';
import { auth } from '../../../../../../auth';
import { prisma } from '@GitSync/db';
import { errorResponse, successResponse } from '../../../../../../lib/api-response';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return errorResponse('UNAUTHORIZED', 'Authentication required', 401);
    }

    const draft = await prisma.contentDraft.findUnique({
      where: { id: params.id },
      include: { repository: true }
    });

    if (!draft) {
      return errorResponse('NOT_FOUND', 'Draft not found', 404);
    }

    return successResponse({ draft });
  } catch (error) {
    console.error('Fetch draft error:', error);
    return errorResponse('INTERNAL_ERROR', 'Failed to fetch draft', 500);
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return errorResponse('UNAUTHORIZED', 'Authentication required', 401);
    }

    const draft = await prisma.contentDraft.findUnique({
      where: { id: params.id },
      include: { workspace: true }
    });

    if (!draft) {
      return errorResponse('NOT_FOUND', 'Draft not found', 404);
    }

    // Mark as published
    await prisma.contentDraft.update({
      where: { id: draft.id },
      data: {
        status: 'PUBLISHED',
        publishedAt: new Date()
      }
    });

    // Save to LinkedInPost table
    await prisma.linkedInPost.create({
      data: {
        draftId: draft.id,
        urn: `urn:li:post:${Math.random().toString(36).substring(7)}`, // Mock URN for now
      }
    });

    // Create AuditLog
    await prisma.auditLog.create({
      data: {
        workspaceId: draft.workspaceId,
        userId: session.user.id,
        action: 'PUBLISHED',
        resourceType: 'ContentDraft',
        resourceId: draft.id,
        details: `Published draft to LinkedIn`
      }
    });

    return successResponse({ success: true });
  } catch (error) {
    console.error('Publish draft error:', error);
    return errorResponse('INTERNAL_ERROR', 'Failed to publish draft', 500);
  }
}
