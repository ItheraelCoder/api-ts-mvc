import type { Request, Response } from "express";
import { UserModel } from "../models/user.model";

export const UserController = {
  getMe: async (req: Request, res: Response) => {
    try {
      const user = req.user;
      if (!user) {
        return res.status(404).json({
          message: "Usuario no encontrado",
        });
      }

      return res.status(200).json({
        message: "Perfil recuperado con exito",
        user,
      });
    } catch (error) {
      console.log(error);

      return res.status(500).json({
        message: "Error al recuperar el perfil",
      });
    }
  },

  getAll: async (req: Request, res: Response) => {
    try {
      const users = await UserModel.findAll();
      return res.status(200).json({
        message: "Lista de Usuarios registrados",
        data: users,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "Error al obtener la lista de usuarios",
      });
    }
  },
};
