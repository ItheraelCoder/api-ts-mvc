import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
  PORT: z.string().default("3000"),
  DATABASE_URL: z.url(),
  JWT_SECRET: z
    .string()
    .min(32, "El Secreto debe tener al menos 32 caracteres"),
  JWT_EXPIRES_IN: z.string(),
  JWT_REFRESH_SECRET: z
    .string()
    .min(32, "El Secreto debe tener al menos 32 caracteres"),
  JWT_REFRESH_EXPIRES_IN: z.string().default("7d"),
  NODE_ENV: z.enum(["development", "production", "test"]),
});

export const env = envSchema.parse(process.env);
