import { Express } from "express";
// Routes
import ProjectRouter from "./project.route";
import CategoryRouter from "./category.route";
import AuthRouter from "./auth.route";
import MemberRouter from "./member.route";
import BugRouter from "./bug.route";
import AssigneeRouter from "./assignee.route";
import CommentRouter from "./comment.route";
import GithubRouter from "./github.route";
// middlewares
import { auth } from "../middleware/auth";

export default function InjectRoutes(app: Express) {
  // Endpoints
  app.use("/api/v1/auth", AuthRouter);
  app.use("/api/v1/projects", auth, ProjectRouter);
  app.use("/api/v1/categories", auth, CategoryRouter);
  app.use("/api/v1/projects/team", auth, MemberRouter);
  app.use("/api/v1/bugs", auth, BugRouter);
  app.use("/api/v1/bugs/assignee", auth, AssigneeRouter);
  app.use("/api/v1/bugs/comment", auth, CommentRouter);
  app.use("/api/v1/github", auth, GithubRouter);
}
