import express from "express";
const router = express.Router();

import {
  createMember,
  deleteMember,
  updateMemberStatus,
} from "../controllers/member.controller";

router.post("/:pid", createMember);
router.delete("/:id", deleteMember);
router.put("/approve/:pid", updateMemberStatus);

export default router;
