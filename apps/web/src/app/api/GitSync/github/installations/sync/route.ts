import { NextRequest, NextResponse } from 'next/server';
import { auth } from '../../../../../../auth';
import { prisma } from '@GitSync/db';
import { checkRateLimit } from '../../../../../../lib/rate-limit';
import { syncPublicRepositoriesForInstallation } from '@GitSync/integrations';

/**
 * Manual sync/repair endpoint for GitHub App installation
 * If GitHub App is installed but callback failed, use this to repair the connection.
 * 
 * Protected by auth. Accepts:
 * {
 *   installationId: number,
 *   accountLogin: string,
 *   accountType: string
 * }
 * 
 * Rate limited to 10 requests per minute per user.
 */
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
    const rateLimitCheck = checkRateLimit(`github-sync:${session.user.id}`, 10, 60);
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

    // Parse request body
    const body = await request.json() as {
      installationId?: unknown;
      accountLogin?: unknown;
      accountType?: unknown;
    };
    const { installationId, accountLogin, accountType } = body;

    // Validate input
    if (!installationId || typeof installationId !== 'number') {
      return NextResponse.json(
        { error: 'Invalid installationId: must be a number' },
        { status: 400 }
      );
    }

    if (!accountLogin || typeof accountLogin !== 'string' || accountLogin.length === 0) {
      return NextResponse.json(
        { error: 'Invalid accountLogin: must be a non-empty string' },
        { status: 400 }
      );
    }

    // Validate installation ID is reasonable
    if (installationId < 1 || installationId > Number.MAX_SAFE_INTEGER) {
      return NextResponse.json(
        { error: 'Invalid installationId: out of range' },
        { status: 400 }
      );
    }

    // Upsert installation record
    const installation = await prisma.gitHubInstallation.upsert({
      where: { installationId: BigInt(installationId) },
      update: {
        workspaceId,
        accountLogin: accountLogin.slice(0, 255), // Prevent overly long strings
        accountType: (typeof accountType === 'string' ? accountType : 'User').slice(0, 50),
      },
      create: {
        workspaceId,
        installationId: BigInt(installationId),
        accountLogin: accountLogin.slice(0, 255),
        accountType: (typeof accountType === 'string' ? accountType : 'User').slice(0, 50),
      },
    });

    console.log(`[GitHub Sync] User ${userId} synced installation ${installationId} to workspace ${workspaceId}`);

    // Trigger public repo sync
    try {
      await syncPublicRepositoriesForInstallation(workspaceId, installation.installationId);
      console.log(`[GitHub Sync] Triggered public repo sync for installation ${installationId}`);
    } catch (syncError) {
      console.error(`[GitHub Sync] Failed to sync repositories for installation ${installationId}:`, syncError);
      // We don't fail the callback, just log it. The UI can retry later.
    }

    return NextResponse.json({
      success: true,
      message: 'Installation synced successfully',
      installation: {
        id: installation.id,
        workspaceId: installation.workspaceId,
        installationId: installation.installationId.toString(),
        accountLogin: installation.accountLogin,
        accountType: installation.accountType,
        createdAt: installation.createdAt,
        updatedAt: installation.updatedAt,
      },
    });
  } catch (error) {
    console.error('Sync endpoint error:', error);
    return NextResponse.json(
      {
        error: 'Internal server error',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
