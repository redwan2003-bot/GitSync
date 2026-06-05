import { NextRequest, NextResponse } from 'next/server';
import { auth } from '../../../../auth';
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
      // Return empty logs for users without a workspace instead of 403
      return NextResponse.json({ logs: [] }, { status: 200 });
    }

    const searchParams = request.nextUrl.searchParams;
    const action = searchParams.get('action');
    const limit = parseInt(searchParams.get('limit') || '50', 10);

    const logs = await prisma.auditLog.findMany({
      where: {
        workspaceId: workspace.workspaceId,
        ...(action && { action }),
      },
      orderBy: { createdAt: 'desc' },
      take: limit,
      include: {
        user: { select: { name: true, email: true } }
      }
    });

    const formattedLogs = logs.map((log: {
      id: string;
      createdAt: Date;
      action: string;
      userId: string;
      resourceType: string;
      resourceId: string;
      details: string | null;
      user: { name: string | null; email: string | null } | null;
    }) => ({
      id: log.id,
      timestamp: log.createdAt.toISOString(),
      action: log.action,
      actor: log.user?.name || log.user?.email || log.userId,
      resource: `${log.resourceType}:${log.resourceId}`,
      details: log.details,
    }));

    return NextResponse.json({ logs: formattedLogs });
  } catch (error) {
    console.error('Audit logs error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
