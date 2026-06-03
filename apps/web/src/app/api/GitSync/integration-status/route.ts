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
      // Return default disconnected status instead of 403
      return successResponse({
        github: { connected: false, configured: !!process.env.GITHUB_APP_ID, installationId: null, accountLogin: null, accountType: null },
        linkedin: { connected: false, configured: !!process.env.LINKEDIN_CLIENT_ID },
        aiProvider: { provider: 'gemini', model: 'gemini-3.5-flash', configured: !!process.env.GEMINI_API_KEY },
        database: { connected: true },
        queue: { connected: !!process.env.UPSTASH_REDIS_REST_URL },
      });
    }

    // Safely query the database in case a table doesn't exist yet in production
    const safeQuery = async <T>(query: Promise<T>): Promise<T | null> => {
      try {
        return await query;
      } catch (e) {
        console.error('Integration safeQuery error:', e);
        return null;
      }
    };

    // Check integration statuses
    const [github, gemini, linkedInEntry] = await Promise.all([
      safeQuery(prisma.gitHubInstallation.findFirst({
        where: { workspaceId: workspace.workspaceId },
      })),
      safeQuery(prisma.tokenVaultEntry.findFirst({
        where: {
          workspaceId: workspace.workspaceId,
          provider: 'GEMINI',
        },
      })),
      safeQuery(prisma.tokenVaultEntry.findFirst({
        where: {
          workspaceId: workspace.workspaceId,
          provider: 'LINKEDIN',
        },
      })),
    ]);

    const linkedinConnected = !!linkedInEntry;

    return successResponse({
      github: {
        connected: !!github,
        configured: !!process.env.GITHUB_APP_ID,
        installationId: github ? (github as any).installationId?.toString() : null,
        accountLogin: (github as any)?.accountLogin || null,
        accountType: (github as any)?.accountType || null,
      },
      linkedin: {
        connected: linkedinConnected,
        configured: !!process.env.LINKEDIN_CLIENT_ID,
      },
      aiProvider: {
        provider: 'gemini',
        model: 'gemini-3.5-flash',
        configured: !!gemini || !!process.env.GEMINI_API_KEY,
      },
      database: { connected: true },
      queue: { connected: !!process.env.UPSTASH_REDIS_REST_URL },
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
