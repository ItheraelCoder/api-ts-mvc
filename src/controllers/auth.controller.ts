import type { Request, Response } from "express";
import { AuthService } from "../services/auth.service";

export const AuthController = {
  register: async (req: Request, res: Response) => {
    const user = await AuthService.register(req.body);
    return res.status(201).json({
      message: "Usuario creado con exito",
      data: user,
    });
  },
  login: async (req: Request, res: Response) => {
    const result = await AuthService.login(req.body);
    return res.status(200).json({
      message: "Login Exitoso",
      ...result,
    });
  },

  delete: async (req: Request, res: Response) => {
    const { id } = req.params;
    return res.status(200).json({
      message: `Usuario ${id} eliminado`,
    });
  },
};
