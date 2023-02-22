import express from "express";
const router = express.Router();

import {
  getAllMember,
  createMember,
  deleteMember,
  approveMember,
} from "../controllers/member.controller";

router.get("/:pid", getAllMember);
router.post("/:pid", createMember);
router.delete("/:id", deleteMember);
router.put("/approve", approveMember);

export default router;
