import { NextRequest, NextResponse } from 'next/server';
import { auth } from '../../../../../auth';
import { prisma } from '@GitSync/db';

/**
 * Debug endpoint for GitHub App installation troubleshooting
 * Protected by auth. Shows installation state, workspace, and database info.
 * DISABLED in production for security.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(_request: NextRequest) {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'Unauthorized', code: 'UNAUTHORIZED' },
        { status: 401 }
      );
    }

    // In production, only allow for development/admin access
    const isProduction = process.env.NODE_ENV === 'production';
    if (isProduction && !process.env.ALLOW_DEBUG_ENDPOINTS) {
      return NextResponse.json(
        { error: 'Debug endpoint disabled in production', code: 'FORBIDDEN' },
        { status: 403 }
      );
    }

    const userId = session.user.id;
    const userEmail = session.user.email;

    // Get current workspace
    const workspaceMember = await prisma.workspaceMember.findFirst({
      where: { userId },
      include: { workspace: true },
    });

    if (!workspaceMember) {
      return NextResponse.json({
        error: 'User not in any workspace',
        userId,
        userEmail,
        workspaceId: null,
      });
    }

    const workspaceId = workspaceMember.workspaceId;

    // Get installations for this workspace
    const installations = await prisma.gitHubInstallation.findMany({
      where: { workspaceId },
      select: {
        id: true,
        workspaceId: true,
        installationId: true,
        accountLogin: true,
        accountType: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    // Get latest 10 global installations (redacted in production)
    const globalInstallations = isProduction
      ? []
      : await prisma.gitHubInstallation.findMany({
          take: 10,
          orderBy: { createdAt: 'desc' },
          select: {
            id: true,
            workspaceId: true,
            installationId: true,
            accountType: true,
            createdAt: true,
          },
        });

    // Get integration status by querying the same data
    let integrationStatus = null;
    try {
      const [github, linkedin, gemini] = await Promise.all([
        prisma.gitHubInstallation.findFirst({
          where: { workspaceId },
        }),
        prisma.tokenVaultEntry.findFirst({
          where: {
            workspaceId,
            provider: 'LINKEDIN',
          },
        }),
        prisma.tokenVaultEntry.findFirst({
          where: {
            workspaceId,
            provider: 'GEMINI',
          },
        }),
      ]);

      integrationStatus = {
        github: {
          connected: !!github,
          configured: !!process.env.GITHUB_APP_ID,
          installationId: github ? github.installationId.toString() : null,
          accountLogin: github?.accountLogin || null,
          accountType: github?.accountType || null,
        },
        linkedin: {
          connected: !!linkedin,
          configured: !!process.env.LINKEDIN_CLIENT_ID,
        },
        aiProvider: {
          provider: 'gemini',
          model: 'gemini-1.5-flash',
          configured: !!gemini || !!process.env.GEMINI_API_KEY,
        },
      };
    } catch (err) {
      console.error('Failed to get integration status:', err);
    }

    // Database info (safe to show)
    const dbUrl = process.env.DATABASE_URL || '';
    const dbHost = dbUrl.match(/\/\/([^:]+)/)?.[1] || 'unknown';
    const dbName = dbUrl.match(/\/([^?]+)\?/)?.[1] || 'unknown';

    return NextResponse.json({
      debug: {
        timestamp: new Date().toISOString(),
        environment: process.env.NODE_ENV,
      },
      user: {
        id: userId,
        email: userEmail,
      },
      workspace: {
        id: workspaceId,
        name: workspaceMember.workspace.name,
      },
      database: {
        host: dbHost,
        name: dbName,
      },
      installations: {
        forThisWorkspace: installations,
        globalLatest10: isProduction ? [] : globalInstallations,
      },
      integrationStatus,
    });
  } catch (error) {
    console.error('Debug endpoint error:', error);
    return NextResponse.json(
      {
        error: 'Internal server error',
        code: 'INTERNAL_ERROR',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
