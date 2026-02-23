import express, { type Application } from "express";
import cors from "cors";
import morgan from "morgan";
import authRoutes from "./routes/auth.routes";
import userRoutes from "./routes/user.routes";
import taskRoutes from "./routes/task.routes";
import { globalErrorHandler } from "./middlewares/error.middleware";

const app: Application = express();
app.disable("x-powered-by");
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/task", taskRoutes);

app.use(globalErrorHandler);

app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK", uptime: process.uptime });
});

export default app;
