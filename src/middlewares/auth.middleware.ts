import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { env } from "../config/env";

export const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader?.startsWith("Bearer ")) {
    return res.status(401).json({ message: "No autorizado: Token faltante" });
  }
  const token = authHeader.split(" ")[1];
  try {
    if (!token) {
      throw new Error("No hay token");
    }
    const decoded = jwt.verify(token, env.JWT_SECRET) as any;
    req.user = {
      id: decoded.sub,
      email: decoded.email,
      role: decoded.role,
    };
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      message: "Token invalido o expirado",
    });
  }
};

export const authorize = (roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user || !roles.includes(req.user.role)) {
      return res.status(403).json({
        message:
          "Prohibido: no tienes los permisos suficientes para esta accion",
      });
    }
    next();
  };
};


