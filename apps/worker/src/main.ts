import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { getWorkerEnv } from "./config/env";

async function bootstrap() {
  getWorkerEnv();
  const app = await NestFactory.create(AppModule);
  await app.init();
}

bootstrap();
