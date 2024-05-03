import type { Config } from 'drizzle-kit';
const config: Config = {
  driver: 'mysql2',
  out: './drizzle/migrations',
  schema: './src/db/schema.ts',
  dbCredentials: {
    uri: process.env.DB_URL!,
  },
  strict: true,
};

export default config;
