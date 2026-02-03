import type { NewTask } from "../db/schema";
import { TaskModel } from "../models/task.model";

export const TaskService = {
  create: async (data: NewTask) => {
    return await TaskModel.create(data);
  },
  getTaskForUser: async (userId: string) => {
    return await TaskModel.getByUser(userId);
  },
  removeTask: async (id: string, userId: string) => {
    return await TaskModel.delete(id, userId);
  },
};
