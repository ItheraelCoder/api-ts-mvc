import type { Request, Response } from "express";
import { TaskService } from "../services/task.service";
import { catchAsync } from "../utils/catchAsync";

export const TaskController = {
  create: catchAsync(async (req: Request, res: Response) => {
    console.log("este es el id", req.user!.id);

    const task = await TaskService.create({
      ...req.body,
      userId: req.user!.id,
    });

    return res.status(201).json(task);
  }),
  getAll: catchAsync(async (req: Request, res: Response) => {
    const task = TaskService.getTaskForUser(req.user!.id);
    return res.status(200).json(task);
  }),
};
