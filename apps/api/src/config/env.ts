import {
  apiEnvSchema,
  apiEnvDevelopmentSchema,
  parseEnv,
  type ApiEnv,
} from "@reposignal/config";

let cached: ApiEnv | null = null;

export function getApiEnv(): ApiEnv {
  if (!cached) {
    const schema =
      process.env.NODE_ENV === "production"
        ? apiEnvSchema
        : apiEnvDevelopmentSchema;
    cached = parseEnv(schema) as ApiEnv;
  }
  return cached;
}
