import express from "express";
const router = express.Router();

import {
  getAllBugs,
  getBugById,
  createBug,
  updateBug,
  toggleBugStatus,
  deleteBug,
  getAssignedBugs,
  bulkCreateMany,
} from "../controllers/bug.controller";

router.get("/", getAllBugs);
router.get("/:id", getBugById);
router.get("/@me/assigned", getAssignedBugs);
router.post("/", createBug);
router.post("/bulk", bulkCreateMany);
router.put("/:id", updateBug);
router.put("/status/:id", toggleBugStatus);
router.delete("/:id", deleteBug);

export default router;
