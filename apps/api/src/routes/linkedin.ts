import { Hono } from "hono";
import { Env } from "../index";

const linkedinRouter = new Hono<{ Bindings: Env }>();

linkedinRouter.get("/callback", async (c) => {
  const code = c.req.query("code");
  const error = c.req.query("error");

  if (error) {
    return c.redirect(`${c.env.WEB_APP_URL}/dashboard?linkedin=error&message=${encodeURIComponent(error)}`);
  }
  if (!code) {
    return c.json({ error: "Missing authorization code" }, 400);
  }
  
  // TODO: Token exchange and vault storage
  
  return c.redirect(`${c.env.WEB_APP_URL}/dashboard?linkedin=connected`);
});

linkedinRouter.get("/connect", (c) => {
  const scope = encodeURIComponent("openid profile w_member_social");
  const url =
    `https://www.linkedin.com/oauth/v2/authorization?response_type=code` +
    `&client_id=${c.env.LINKEDIN_CLIENT_ID}` +
    `&redirect_uri=${encodeURIComponent(c.env.LINKEDIN_REDIRECT_URI)}` +
    `&scope=${scope}`;
  
  return c.redirect(url);
});

export { linkedinRouter };
