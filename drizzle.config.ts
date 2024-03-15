import type { Config } from "drizzle-kit";

export default {
  schema: "./schema",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.DB_URL!,
  },
} satisfies Config;