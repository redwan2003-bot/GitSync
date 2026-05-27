import { parseEnv, workerEnvSchema, type WorkerEnv } from "@GitSync/config";

let cached: WorkerEnv | null = null;

export function getWorkerEnv(): WorkerEnv {
  if (!cached) {
    cached = parseEnv(workerEnvSchema);
  }
  return cached;
}
