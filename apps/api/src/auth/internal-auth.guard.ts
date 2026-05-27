import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import * as crypto from "crypto";
import { getApiEnv } from "../config/env";
import type { RequestAuthContext } from "./auth-context";

const MAX_SKEW_MS = 5 * 60 * 1000;

@Injectable()
export class InternalAuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const req = context.switchToHttp().getRequest();
    const userId = req.headers["x-user-id"] as string | undefined;
    const workspaceId = req.headers["x-workspace-id"] as string | undefined;
    const timestamp = req.headers["x-request-timestamp"] as string | undefined;
    const signature = req.headers["x-internal-signature"] as string | undefined;

    if (!userId || !workspaceId || !timestamp || !signature) {
      throw new UnauthorizedException("Missing authentication headers");
    }

    const ts = Number(timestamp);
    if (!Number.isFinite(ts) || Math.abs(Date.now() - ts) > MAX_SKEW_MS) {
      throw new UnauthorizedException("Request timestamp expired");
    }

    const env = getApiEnv();
    const expected = crypto
      .createHmac("sha256", env.INTERNAL_API_SECRET)
      .update(`${userId}:${workspaceId}:${timestamp}`)
      .digest("hex");

    const sigBuf = Buffer.from(signature, "hex");
    const expBuf = Buffer.from(expected, "hex");
    if (
      sigBuf.length !== expBuf.length ||
      !crypto.timingSafeEqual(sigBuf, expBuf)
    ) {
      throw new UnauthorizedException("Invalid request signature");
    }

    req.authContext = {
      userId,
      workspaceId,
      userEmail: (req.headers["x-user-email"] as string) ?? "",
    } satisfies RequestAuthContext;

    return true;
  }
}
