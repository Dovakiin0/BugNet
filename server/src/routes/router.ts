import express, { Express } from "express";
import cors from "cors";

import ProjectRouter from "./project.route";

export default function Bootstrap(app: Express) {
  app.use(
    cors({
      origin: "http://localhost:3000",
    })
  );
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use("/api/v1/projects", ProjectRouter);
}
