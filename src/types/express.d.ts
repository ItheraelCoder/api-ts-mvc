import { User } from "../db/schema";

declare global {
  namespace Express {
    interface Request {
      user?: {
        id: User["id"];
        email: User["email"];
        role: User["role"];
      };
    }
  }
}
