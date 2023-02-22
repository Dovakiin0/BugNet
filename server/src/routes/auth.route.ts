import express from "express";
const router = express.Router();

import { loginUser, registerUser, getMe } from "../controllers/auth.controller";
import { auth } from "../middleware/auth";

router.post("/", loginUser);
router.post("/register", registerUser);
router.get("/@me", auth, getMe);

export default router;
