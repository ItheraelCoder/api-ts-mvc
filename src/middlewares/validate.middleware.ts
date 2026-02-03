import type { NextFunction, Request, Response } from "express";
import { z, ZodError } from "zod";

export const validate =
  (schema: z.ZodTypeAny) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
        query: req.query,
        param: req.params,
      });

      next();
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({
          message: "Error de Validacion",
          errors: error.issues.map((issue) => ({
            path: issue.path.length > 1 ? issue.path[1] : issue.path[0],
            message: issue.message,
          })),
        });
      }
      return res.status(500).json({
        message: "Internal server error",
      });
    }
  };
