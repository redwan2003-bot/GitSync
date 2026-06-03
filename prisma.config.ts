import { defineConfig } from '@prisma/client/runtime';
import { NeonHttpAdapter } from '@prisma/adapter-neon';
import { env } from 'process';

export default defineConfig({
  datasource: {
    db: {
      // Use Neon adapter for the PostgreSQL connection
      adapter: new NeonHttpAdapter({ url: env.DATABASE_URL as string })
    }
  },
  generator: {
    client: {
      previewFeatures: ['driverAdapters']
    }
  }
});
