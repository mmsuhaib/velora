import { defineConfig, env } from "@prisma/config";

try {
  process.loadEnvFile(".env");
} catch {
  // .env is optional — DATABASE_URL isn't required until a real database is connected.
}

// CLI-level config for Prisma 7+ (migrations, introspection). Not used to
// connect at runtime — no database is live in this phase. `DATABASE_URL`
// in `.env` is a placeholder; see `prisma/schema.prisma` for details.
export default defineConfig({
  schema: "prisma/schema.prisma",
  datasource: {
    url: env("DATABASE_URL"),
  },
});
