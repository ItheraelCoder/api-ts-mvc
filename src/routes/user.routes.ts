import { Router } from "express";
import { authenticate, authorize } from "../middlewares/auth.middleware";
import { UserController } from "../controllers/user.controller";

const router = Router();

router.get("/me", authenticate, UserController.getMe);
router.get("/", authenticate, authorize(["admin"]), UserController.getAll);

export default router;
