import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/auth';
import { prisma } from '@GitSync/db';

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
    const body = await request.json();
    const { installationId, accountLogin, accountType } = body;

    if (!installationId || !accountLogin) {
      return NextResponse.json(
        { error: 'Missing installationId or accountLogin' },
        { status: 400 }
      );
    }

    // Upsert installation record
    const installation = await prisma.gitHubInstallation.upsert({
      where: { installationId: BigInt(installationId) },
      update: {
        workspaceId,
        accountLogin,
        accountType: accountType || 'User',
      },
      create: {
        workspaceId,
        installationId: BigInt(installationId),
        accountLogin,
        accountType: accountType || 'User',
      },
    });

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
