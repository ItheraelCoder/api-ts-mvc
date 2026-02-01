import { env } from "../config/env";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

const DB_URL = env.DATABASE_URL;

if (!DB_URL) {
  throw new Error("DATABASE_URL is required!");
}

const pool = new Pool({
  connectionString: DB_URL,
});
const db = drizzle({ client: pool });
console.log("Database is connect!");

export default db;
