import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { getApiEnv } from "./config/env";

async function bootstrap() {
  getApiEnv();

  const app = await NestFactory.create(AppModule, {
    rawBody: true,
  });

  app.enableCors({
    origin: [getApiEnv().WEB_APP_URL],
    credentials: true,
  });

  const port = getApiEnv().PORT;
  await app.listen(port);
}

bootstrap();
