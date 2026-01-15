import express from "express";
import type { Express, Request, Response } from "express";
import errorMiddleware from "./middlewares/error-handler.middleware";
import cookieParser from "cookie-parser";
import cors from "cors";
import { rateLimit } from "express-rate-limit";

const limiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  limit: 50,
  standardHeaders: "draft-8",
  ipv6Subnet: 56,
});

const app: Express = express();

const environment = process.env.NODE_ENV;

app.use(
  cors({
    origin: environment === "production" ? process.env.CORS_ORIGIN : "http://localhost:3000",
    credentials: true,
  })
);

app.use(limiter);
app.use(express.json({ limit: "1000kb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

import authRoutes from "./routes/auth.routes";
import predictionRoutes from "./routes/prediction.routes";

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/prediction", predictionRoutes);

app.use((req: Request, res: Response) => {
  res.status(404).json({ status: 404, message: "Route not found" });
});

app.use(errorMiddleware);
export default app;
