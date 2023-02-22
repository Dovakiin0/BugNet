import express from "express";
const router = express.Router();

import {
  getAllBugs,
  getBugById,
  createBug,
  updateBug,
  deleteBug,
} from "../controllers/bug.controller";

router.get("/", getAllBugs);
router.get("/:id", getBugById);
router.post("/", createBug);
router.put("/:id", updateBug);
router.delete("/:id", deleteBug);

export default router;
