import { Router } from "express";
import { validate } from "../middlewares/validate.middleware";
import { LoginUserDTO, RegisterUserDTO } from "../dto/user.dto";
import { AuthController } from "../controllers/auth.controller";

const router = Router();

router.post("/register", validate(RegisterUserDTO), AuthController.register);
router.post("/login", validate(LoginUserDTO), AuthController.login);

export default router;
