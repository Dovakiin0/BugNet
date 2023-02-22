import express from "express";
const router = express.Router();

import {
  createComment,
  deleteComment,
  updateComment,
} from "../controllers/comment.controller";

router.post("/:bid", createComment);
router.put("/:id", updateComment);
router.delete("/:id", deleteComment);

export default router;
