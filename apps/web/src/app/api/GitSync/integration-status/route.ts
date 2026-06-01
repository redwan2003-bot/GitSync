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

    // Rate limiting: 120 requests per minute per user
    const rateLimitCheck = checkRateLimit(`integration-status:${session.user.id}`, 120, 60);
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

    // Check integration statuses
    const [github, linkedin, gemini] = await Promise.all([
      prisma.gitHubInstallation.findFirst({
        where: { workspaceId: workspace.workspaceId },
      }),
      prisma.tokenVaultEntry.findFirst({
        where: {
          workspaceId: workspace.workspaceId,
          provider: 'LINKEDIN',
        },
      }),
      prisma.tokenVaultEntry.findFirst({
        where: {
          workspaceId: workspace.workspaceId,
          provider: 'GEMINI',
        },
      }),
    ]);

    return successResponse({
      github: {
        connected: !!github,
        configured: process.env.GITHUB_APP_ID ? true : false,
        installationId: github ? github.installationId.toString() : null,
        accountLogin: github?.accountLogin || null,
        accountType: github?.accountType || null,
      },
      linkedin: {
        connected: !!linkedin,
        configured: process.env.LINKEDIN_CLIENT_ID ? true : false,
      },
      aiProvider: {
        provider: 'gemini',
        model: 'gemini-3.5-flash',
        configured: !!gemini || (process.env.GEMINI_API_KEY ? true : false),
      },
      database: {
        connected: true,
      },
      queue: {
        connected: process.env.UPSTASH_REDIS_REST_URL ? true : false,
      },
    });
  } catch (error) {
    console.error('Integration status error:', error);
    return errorResponse(
      ErrorCodes.INTERNAL_ERROR,
      'Failed to fetch integration status',
      500
    );
  }
}
