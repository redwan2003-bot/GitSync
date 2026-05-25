import { parseEnv, workerEnvSchema, type WorkerEnv } from "@reposignal/config";

let cached: WorkerEnv | null = null;

export function getWorkerEnv(): WorkerEnv {
  if (!cached) {
    cached = parseEnv(workerEnvSchema);
  }
  return cached;
}
