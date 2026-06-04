import { NextRequest, NextResponse } from 'next/server';
import { auth } from '../../../../auth';
import { prisma } from '@GitSync/db';
import { checkRateLimit } from '../../../../lib/rate-limit';
import { successResponse, rateLimitErrorResponse, errorResponse, ErrorCodes } from '../../../../lib/api-response';

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
    const rateLimitCheck = checkRateLimit(`project-cards:${session.user.id}`, 30, 60);
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

    // For now, return empty state (project cards backend not fully implemented)
    // In future, fetch from real project cards backend when available
    return successResponse({
      cards: [],
      workspace: {
        id: workspace.workspaceId,
      },
    });
  } catch (error) {
    console.error('Project cards error:', error);
    return errorResponse(
      ErrorCodes.INTERNAL_ERROR,
      'Failed to fetch project cards',
      500
    );
  }
}
