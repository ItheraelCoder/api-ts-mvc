import { z } from "zod";

export const RegisterUserDTO = z.object({
  body: z.object({
    email: z
      .email("el formato del correo es invalido")
      .min(5, "el email es demasiado corto"),
    password: z
      .string()
      .min(8, "la contraseña debe tener al menos 8 caracteres")
      .max(100, "la contraseña es demasiado larga"),
    role: z.enum(["admin", "user"]).optional(),
  }),
});
export const LoginUserDTO = z.object({
  body: z.object({
    email: z.email("creadenciales invalidas"),
    password: z.string().min(1, "la contraseña es requerida"),
  }),
});

export type RegisterUserInput = z.infer<typeof RegisterUserDTO>["body"];
export type LoginUserInput = z.infer<typeof LoginUserDTO>["body"];
