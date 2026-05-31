import { auth } from "@/auth";
import { prisma } from "@GitSync/db";
import { signInternalRequest } from "@/lib/api-sign";
import { NextRequest, NextResponse } from "next/server";

const API_BASE = process.env.NEXT_PUBLIC_API_URL!;

async function buildHeaders() {
  const session = await auth();
  if (!session?.user?.id || !session.user.email) {
    return null;
  }

  let workspaceId = (session as { workspaceId?: string }).workspaceId;
  if (!workspaceId) {
    const membership = await prisma.workspaceMember.findFirst({
      where: { userId: session.user.id },
      select: { workspaceId: true },
    });
    workspaceId = membership?.workspaceId;
  }
  if (!workspaceId) {
    return null;
  }

  const secret = process.env.INTERNAL_API_SECRET;
  if (!secret) {
    return null;
  }

  return signInternalRequest({
    userId: session.user.id,
    workspaceId,
    userEmail: session.user.email,
    secret,
  });
}

export async function GET(
  req: NextRequest,
  ctx: { params: Promise<{ path: string[] }> },
) {
  return proxy(req, ctx, "GET");
}

export async function POST(
  req: NextRequest,
  ctx: { params: Promise<{ path: string[] }> },
) {
  return proxy(req, ctx, "POST");
}

export async function PUT(
  req: NextRequest,
  ctx: { params: Promise<{ path: string[] }> },
) {
  return proxy(req, ctx, "PUT");
}

export async function PATCH(
  req: NextRequest,
  ctx: { params: Promise<{ path: string[] }> },
) {
  return proxy(req, ctx, "PATCH");
}

async function proxy(
  req: NextRequest,
  ctx: { params: Promise<{ path: string[] }> },
  method: string,
) {
  try {
    const headers = await buildHeaders();
    if (!headers) {
      return NextResponse.json({ error: "Unauthorized (Missing headers or INTERNAL_API_SECRET)" }, { status: 401 });
    }

    const { path } = await ctx.params;
    const target = `${API_BASE}/${path.join("/")}${req.nextUrl.search}`;

    const res = await fetch(target, {
      method,
      headers: {
        ...headers,
        ...(req.headers.get("content-type")
          ? { "content-type": req.headers.get("content-type")! }
          : {}),
      },
      body: method !== "GET" && method !== "HEAD" ? await req.text() : undefined,
    });

    const text = await res.text();
    return new NextResponse(text, {
      status: res.status,
      headers: {
        "content-type": res.headers.get("content-type") ?? "application/json",
      },
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: `Proxy Error: ${message}` }, { status: 500 });
  }
}
