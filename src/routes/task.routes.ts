import { Router } from "express";
import { TaskController } from "../controllers/task.controller";
import { authenticate } from "../middlewares/auth.middleware";

const router = Router();

router.post("/create", authenticate, TaskController.create);
router.get("/getall", authenticate, TaskController.getAll);

export default router;
