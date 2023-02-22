import express from "express";
const router = express.Router();

import {
  createAssignee,
  deleteAssignee,
} from "../controllers/assignee.controller";

router.post("/", createAssignee);
router.delete("/:id", deleteAssignee);

export default router;
