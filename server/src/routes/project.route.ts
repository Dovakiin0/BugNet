import express from "express";
const router = express.Router();

import {
  getAllProjects,
  createProject,
  updateProject,
  deleteProject,
  getProjectById,
} from "../controllers/project.controller";

router.get("/", getAllProjects);
router.get("/:id", getProjectById);
router.post("/", createProject);
router.put("/:id", updateProject);
router.delete("/:id", deleteProject);

export default router;
