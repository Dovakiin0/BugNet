import express from "express";
const router = express.Router();

import {
  getAllProjects,
  createProject,
  updateProject,
  deleteProject,
  getProjectById,
} from "../controllers/project.controller";

import { getProjectBoard } from "../controllers/kanban.controller";

router.get("/", getAllProjects);
router.get("/:id", getProjectById);
router.get("/:pid/board", getProjectBoard);
router.post("/", createProject);
router.put("/:id", updateProject);
router.delete("/:id", deleteProject);

export default router;
