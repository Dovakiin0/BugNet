import express from "express";
const router = express.Router();

import {
  createComment,
  deleteComment,
  updateComment,
  getAllComments,
} from "../controllers/comment.controller";

router.get("/recent", getAllComments);
router.post("/:bid", createComment);
router.put("/:id", updateComment);
router.delete("/:id", deleteComment);

export default router;
