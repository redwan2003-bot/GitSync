import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/auth';
import { prisma } from '@GitSync/db';

export async function GET(request: NextRequest) {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const workspace = await prisma.workspaceMember.findFirst({
      where: { userId: session.user.id },
    });

    if (!workspace) {
      return NextResponse.json(
        { error: 'No workspace' },
        { status: 403 }
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

    return NextResponse.json({
      github: {
        connected: !!github,
        configured: process.env.GITHUB_APP_ID ? true : false,
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
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
