import { auth } from '../../../../auth';
import { prisma } from '@GitSync/db';
import { checkRateLimit } from '../../../../lib/rate-limit';
import { successResponse, rateLimitErrorResponse, errorResponse, ErrorCodes } from '../../../../lib/api-response';

// Safely query the database in case a table doesn't exist yet in production
const safeQuery = async <T>(query: Promise<T>): Promise<T | null> => {
  try {
    return await query;
  } catch (e) {
    console.error('Integration safeQuery error:', e);
    return null;
  }
};

export async function GET() {
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
        aiProvider: { provider: 'gemini', model: 'gemini-2.0-flash', configured: !!process.env.GEMINI_API_KEY },
        database: { connected: true },
        queue: { connected: !!process.env.REDIS_URL || !!process.env.UPSTASH_REDIS_REST_URL },
      });
    }

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

    const linkedinData = linkedInEntry as { authorUrn?: string | null } | null;
    const linkedinConnected = !!linkedInEntry;

    const githubData = github as { installationId?: { toString(): string }; accountLogin?: string; accountType?: string } | null;

    return successResponse({
      github: {
        connected: !!github,
        configured: !!process.env.GITHUB_APP_ID,
        installationId: githubData?.installationId ? githubData.installationId.toString() : null,
        accountLogin: githubData?.accountLogin || null,
        accountType: githubData?.accountType || null,
      },
      linkedin: {
        connected: linkedinConnected,
        configured: !!process.env.LINKEDIN_CLIENT_ID,
        authorUrn: linkedinData?.authorUrn || null,
      },
      aiProvider: {
        provider: 'gemini',
        model: 'gemini-2.0-flash',
        configured: !!gemini || !!process.env.GEMINI_API_KEY,
      },
      database: { connected: true },
      queue: { connected: !!process.env.REDIS_URL || !!process.env.UPSTASH_REDIS_REST_URL },
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
