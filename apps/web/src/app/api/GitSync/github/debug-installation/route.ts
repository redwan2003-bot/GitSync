import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/auth';
import { prisma } from '@GitSync/db';

/**
 * Debug endpoint for GitHub App installation troubleshooting
 * Protected by auth. Shows installation state, workspace, and database info.
 * Do not expose publicly.
 */
export async function GET(request: NextRequest) {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
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

    // Get latest 10 global installations (redacted)
    const globalInstallations = await prisma.gitHubInstallation.findMany({
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

    // Get integration status
    let integrationStatus = null;
    try {
      const statusRes = await fetch(
        new URL('/api/GitSync/integration-status', request.url).toString(),
        {
          headers: {
            cookie: request.headers.get('cookie') || '',
          },
        }
      );
      if (statusRes.ok) {
        integrationStatus = await statusRes.json();
      }
    } catch (err) {
      console.error('Failed to fetch integration status:', err);
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
        globalLatest10: globalInstallations,
      },
      integrationStatus,
    });
  } catch (error) {
    console.error('Debug endpoint error:', error);
    return NextResponse.json(
      {
        error: 'Internal server error',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
