import { z } from "zod";

export const CreateTaskDTO = z.object({
  body: z.object({
    title: z.string().min(3, "El titulo debe tener minimo 3 caracteres"),
    description: z.string().optional(),
  }),
});

export type CreateTaskInput = z.infer<typeof CreateTaskDTO>["body"];
