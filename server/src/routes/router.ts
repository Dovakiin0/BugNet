import { Express } from "express";

import ProjectRouter from "./project.route";
import CategoryRouter from "./category.route";
import AuthRouter from "./auth.route";

// middlewares
import { auth } from "../middleware/auth.ts";

export default function InjectRoutes(app: Express) {
  app.use("/api/v1/projects", auth, PlrojectRouter);
  app.use("/api/v1/categories", CategoryRouter);
  app.use("/api/v1/auth", AuthRouter);
}
