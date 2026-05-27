import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { getWorkerEnv } from "./config/env";

async function bootstrap() {
  getWorkerEnv();
  const app = await NestFactory.create(AppModule);
  // Render "Web Service" health checks require a port to be bound, 
  // even if this is just a background worker.
  const port = process.env.PORT || 3002;
  await app.listen(port);
  console.log(`Worker is running and listening on port ${port} to satisfy Render health checks`);
}

bootstrap();
