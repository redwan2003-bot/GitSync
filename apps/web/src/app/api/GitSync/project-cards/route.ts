import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/auth';
import { prisma } from '@GitSync/db';
import { checkRateLimit } from '@/lib/rate-limit';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(_request: NextRequest) {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Rate limiting: 30 requests per minute per user
    const rateLimitCheck = checkRateLimit(`project-cards:${session.user.id}`, 30, 60);
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
