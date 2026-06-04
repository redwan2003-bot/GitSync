import { auth } from "../auth";
import { prisma } from "@GitSync/db";
import { signInternalRequest } from "./api-sign";

const API_BASE = process.env.NEXT_PUBLIC_API_URL!;

async function getAuthHeaders(): Promise<Record<string, string>> {
  const session = await auth();
  if (!session?.user?.id || !session.user.email) {
    throw new Error("Unauthorized");
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
    throw new Error("No workspace found for user");
  }

  const secret = process.env.INTERNAL_API_SECRET;
  if (!secret) {
    throw new Error("INTERNAL_API_SECRET is not configured");
  }

  return signInternalRequest({
    userId: session.user.id,
    workspaceId,
    userEmail: session.user.email,
    secret,
  });
}

export async function apiFetch<T>(
  path: string,
  init?: RequestInit,
): Promise<T> {
  const headers = await getAuthHeaders();
  const res = await fetch(`${API_BASE}${path}`, {
    ...init,
    headers: {
      "content-type": "application/json",
      ...headers,
      ...(init?.headers ?? {}),
    },
    cache: "no-store",
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(body || `API error ${res.status}`);
  }

  return res.json() as Promise<T>;
}
