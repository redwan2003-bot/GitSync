import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import type { RequestAuthContext } from "./auth-context";

export const AuthContext = createParamDecorator(
  (_data: unknown, ctx: ExecutionContext): RequestAuthContext => {
    const request = ctx.switchToHttp().getRequest();
    return request.authContext;
  },
);
