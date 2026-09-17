import { PrismaClient } from "@prisma/client";

// Standard Next.js singleton so dev-mode hot reloads don't spawn a new
// PrismaClient (and a new connection pool) on every module reload.
//
// Not wired into any route yet — there is no live database in this phase.
// Once `DATABASE_URL` points at a real instance and migrations have run,
// import `prisma` from here in place of the `lib/mock-data/*` reads.

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
