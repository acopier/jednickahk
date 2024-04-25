/** @type { import('drizzle-kit').Config } */
export default {
  driver: 'mysql2',
  out: './drizzle/migrations',
  schema: './src/db/schema.ts',
  dbCredentials: {
    uri: process.env.DB_URL,
  },
  strict: true,
};
