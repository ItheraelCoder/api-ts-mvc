import { and, eq } from "drizzle-orm";
import { task, type NewTask } from "../db/schema";
import db from "../libs/db";

export const TaskModel = {
  create: async (data: NewTask) => {
    const [newTask] = await db.insert(task).values(data).returning();
    if (!newTask) {
      throw new Error("La tarea no puedo ser creada");
    }
    return newTask;
  },
  getByUser: async (userId: string) => {
    return await db.select().from(task).where(eq(task.userId, userId));
  },
  delete: async (id: string, userId: string) => {
    const [deleted] = await db
      .delete(task)
      .where(and(eq(task.id, id), eq(task.userId, userId)))
      .returning();
    return deleted;
  },
};
