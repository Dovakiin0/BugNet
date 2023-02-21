import express from "express";
const router = express.Router();

import { getAllMember, createMember } from "../controllers/member.controller";

router.get("/:pid", getAllMember);
router.post("/:pid", createMember);

export default router;
