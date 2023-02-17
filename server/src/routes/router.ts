import { Express } from "express";

import ProjectRouter from "./project.route";
import CategoryRouter from "./category.route";

export default function InjectRoutes(app: Express) {
  app.use("/api/v1/projects", ProjectRouter);
  app.use("/api/v1/categories", CategoryRouter);
}
