import { PostHog } from "posthog-node";

export function createPostHogClient(env: { POSTHOG_TOKEN: string; POSTHOG_HOST: string }) {
  return new PostHog(env.POSTHOG_TOKEN, {
    host: env.POSTHOG_HOST,
    flushAt: 1,
    flushInterval: 0,
  });
}
