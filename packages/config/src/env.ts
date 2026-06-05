import { z } from "zod";

const nonEmpty = z.string().min(1);

const geminiEnvSchema = z.object({
  OPENROUTER_API_KEY: nonEmpty,
  OPENROUTER_MODEL: z.string().default("google/gemini-2.0-flash-lite-preview-02-05:free"),
  OPENROUTER_ALLOW_PRIVATE_REPO_DRAFTING: z
    .enum(["true", "false"])
    .default("false")
    .transform((v) => v === "true"),
});

/** Shared across API, worker, and web (server). */
export const sharedEnvSchema = z.object({
  NODE_ENV: z
    .enum(["development", "test", "production"])
    .default("development"),
  DATABASE_URL: nonEmpty,
  REDIS_URL: nonEmpty,
  TOKEN_ENCRYPTION_KEY: nonEmpty,
});

/** Nest API schema */
export const apiEnvSchema = sharedEnvSchema.merge(geminiEnvSchema).extend({
  PORT: z.coerce.number().default(3001),
  AUTH_SECRET: nonEmpty,
  INTERNAL_API_SECRET: nonEmpty,
  GITHUB_WEBHOOK_SECRET: nonEmpty,
  GITHUB_APP_ID: nonEmpty,
  GITHUB_APP_PRIVATE_KEY: nonEmpty,
  LINKEDIN_CLIENT_ID: nonEmpty,
  LINKEDIN_CLIENT_SECRET: nonEmpty,
  LINKEDIN_REDIRECT_URI: z.string().url(),
  WEB_APP_URL: z.string().url(),
  LINKEDIN_PROFILE_EDIT_ENABLED: z
    .enum(["true", "false"])
    .default("false")
    .transform((v) => v === "true"),
  DEFAULT_MAX_POSTS_PER_WEEK: z.coerce.number().int().min(1).default(3),
  WEBHOOK_RETENTION_DAYS: z.coerce.number().int().min(1).default(90),
  EVIDENCE_RETENTION_DAYS: z.coerce.number().int().min(1).default(90),
});

/** BullMQ worker schema */
export const workerEnvSchema = sharedEnvSchema.merge(geminiEnvSchema);

/** Next.js web application schema */
export const webEnvSchema = z.object({
  NODE_ENV: z
    .enum(["development", "test", "production"])
    .default("development"),
  AUTH_SECRET: nonEmpty,
  AUTH_URL: z.string().url().optional(),
  AUTH_TRUST_HOST: z
    .enum(["true", "false"])
    .default("true")
    .transform((v) => v === "true"),
  AUTH_GITHUB_ID: nonEmpty,
  AUTH_GITHUB_SECRET: nonEmpty,
  DATABASE_URL: nonEmpty,
  NEXT_PUBLIC_API_URL: z.string().url(),
  INTERNAL_API_SECRET: nonEmpty,
});

export type SharedEnv = z.infer<typeof sharedEnvSchema>;
export type ApiEnv = z.infer<typeof apiEnvSchema>;
export type WorkerEnv = z.infer<typeof workerEnvSchema>;
export type WebEnv = z.infer<typeof webEnvSchema>;

/** Local development defaults; production uses strict apiEnvSchema. */
export const apiEnvDevelopmentSchema = z.object({
  NODE_ENV: z
    .enum(["development", "test", "production"])
    .default("development"),
  DATABASE_URL: z
    .string()
    .default(
      "postgresql://GitSync:GitSync_password@localhost:5432/GitSync_db?schema=public",
    ),
  REDIS_URL: z.string().default("redis://localhost:6379"),
  TOKEN_ENCRYPTION_KEY: z
    .string()
    .min(32)
    .default("dev-only-token-encryption-key-32b!!"),
  PORT: z.coerce.number().default(3001),
  AUTH_SECRET: z.string().min(32).default("dev-auth-secret-min-32-characters!!"),
  INTERNAL_API_SECRET: z
    .string()
    .min(16)
    .default("dev-internal-api-secret!!"),
  GITHUB_WEBHOOK_SECRET: z.string().default("my_github_secret"),
  GITHUB_APP_ID: z.string().default("0"),
  GITHUB_APP_PRIVATE_KEY: z.string().default(""),
  LINKEDIN_CLIENT_ID: z.string().default(""),
  LINKEDIN_CLIENT_SECRET: z.string().default(""),
  LINKEDIN_REDIRECT_URI: z
    .string()
    .url()
    .default("http://localhost:3001/integrations/linkedin/callback"),
  OPENROUTER_API_KEY: z.string().default(""),
  OPENROUTER_MODEL: z.string().default("google/gemini-2.0-flash-lite-preview-02-05:free"),
  OPENROUTER_ALLOW_PRIVATE_REPO_DRAFTING: z
    .enum(["true", "false"])
    .default("false")
    .transform((v) => v === "true"),
  WEB_APP_URL: z.string().url().default("http://localhost:3000"),
  LINKEDIN_PROFILE_EDIT_ENABLED: z
    .enum(["true", "false"])
    .default("false")
    .transform((v) => v === "true"),
  DEFAULT_MAX_POSTS_PER_WEEK: z.coerce.number().int().min(1).default(3),
  WEBHOOK_RETENTION_DAYS: z.coerce.number().int().min(1).default(90),
  EVIDENCE_RETENTION_DAYS: z.coerce.number().int().min(1).default(90),
});

export type ApiEnvDevelopment = z.infer<typeof apiEnvDevelopmentSchema>;

function formatZodError(error: z.ZodError): string {
  return error.issues
    .map((i) => `  - ${i.path.join(".")}: ${i.message}`)
    .join("\n");
}

export function parseEnv<T extends z.ZodTypeAny>(
  schema: T,
  source: NodeJS.ProcessEnv = process.env,
): z.infer<T> {
  const result = schema.safeParse(source);
  if (!result.success) {
    throw new Error(
      `Invalid environment configuration:\n${formatZodError(result.error)}`,
    );
  }
  return result.data;
}
