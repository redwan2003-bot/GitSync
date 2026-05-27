import { Module } from "@nestjs/common";
import { LinkedInOAuthController } from "./linkedin-oauth.controller";

@Module({
  controllers: [LinkedInOAuthController],
})
export class IntegrationsModule {}
