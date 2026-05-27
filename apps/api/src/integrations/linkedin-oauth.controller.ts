import { Controller, Get, Query, Res, HttpException, HttpStatus } from "@nestjs/common";
import type { Response } from "express";
import { getApiEnv } from "../config/env";

/**
 * LinkedIn OAuth callback on Render API.
 * Token exchange and vault storage are completed in a follow-up slice.
 */
@Controller("integrations/linkedin")
export class LinkedInOAuthController {
  @Get("callback")
  async callback(
    @Query("code") code: string | undefined,
    @Query("error") error: string | undefined,
    @Res() res: Response,
  ) {
    const env = getApiEnv();
    if (error) {
      return res.redirect(
        `${env.WEB_APP_URL}/dashboard?linkedin=error&message=${encodeURIComponent(error)}`,
      );
    }
    if (!code) {
      throw new HttpException("Missing authorization code", HttpStatus.BAD_REQUEST);
    }
    return res.redirect(`${env.WEB_APP_URL}/dashboard?linkedin=connected`);
  }

  @Get("connect")
  connect(@Res() res: Response) {
    const env = getApiEnv();
    const scope = encodeURIComponent("openid profile w_member_social");
    const url =
      `https://www.linkedin.com/oauth/v2/authorization?response_type=code` +
      `&client_id=${env.LINKEDIN_CLIENT_ID}` +
      `&redirect_uri=${encodeURIComponent(env.LINKEDIN_REDIRECT_URI)}` +
      `&scope=${scope}`;
    return res.redirect(url);
  }
}
