import { defineConfig } from "drizzle-kit";
import { env } from "./config/env";

export default defineConfig({
  dialect: 'postgresql',
  schema: './modules/core/db/schema',
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  out: './database'
})
