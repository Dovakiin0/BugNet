import express from "express";
const router = express.Router();

import {
  createMember,
  deleteMember,
  approveMember,
} from "../controllers/member.controller";

router.post("/:pid", createMember);
router.delete("/:id", deleteMember);
router.put("/approve", approveMember);

export default router;
