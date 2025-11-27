import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
// @ts-ignore
import pg from "pg";

declare global {
  var prisma: PrismaClient | undefined;
}

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,

  // ⭐ THIS IS THE FIX:
  // pg.Pool does NOT apply search_path unless set in "connection parameters"
  // so we must use this:
  // key: "options", value: "-c search_path=resdex"
  // but it must be passed as an environment variable like below ↓↓↓
});

// ⭐ After pool connect, force search_path:
pool.on("connect", (client:any) => {
  client.query(`SET search_path TO public;`);
});

const adapter = new PrismaPg(pool);

export const prisma =
  global.prisma ||
  new PrismaClient({
    adapter,
    log: ["query"],
  });

if (process.env.NODE_ENV !== "production") {
  global.prisma = prisma;
}

export default prisma;
