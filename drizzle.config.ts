import { defineConfig } from "drizzle-kit";
import { env } from "./src/config/env";

export default defineConfig({
  schema: "./src/db/schema.ts", // ¿Dónde están tus tablas?
  out: "./drizzle", // ¿Dónde se guardarán las migraciones?
  dialect: "postgresql", // ¿Qué motor usamos?
  dbCredentials: {
    url: env.DATABASE_URL, // Credenciales de la DB
  },
  verbose: true, // Para ver todo lo que hace en consola
  strict: true, // Seguridad extra
});
