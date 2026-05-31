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

    // For now, return empty state (project cards backend not fully implemented)
    // In future, fetch from real project cards backend when available
    return NextResponse.json({
      cards: [],
    });
  } catch (error) {
    console.error('Project cards error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
