import { Express } from "express";

import ProjectRouter from "./project.route";
import CategoryRouter from "./category.route";
import AuthRouter from "./auth.route";
import MemberRouter from "./member.route";
// middlewares
import { auth } from "../middleware/auth";

export default function InjectRoutes(app: Express) {
  app.use("/api/v1/projects", ProjectRouter);
  app.use("/api/v1/categories", CategoryRouter);
  app.use("/api/v1/auth", AuthRouter);
  app.use("/api/v1/projects/team", MemberRouter);
}
