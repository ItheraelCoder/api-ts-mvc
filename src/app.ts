import express, { type Application } from "express";
import cors from "cors";
import morgan from "morgan";
import authRoutes from "./routes/auth.routes";

const app: Application = express();
app.disable("x-powered-by");
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/auth", authRoutes);

app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK", uptime: process.uptime });
});

export default app;

//!quedamos en la parte del chat con gemini que dice que sigue
