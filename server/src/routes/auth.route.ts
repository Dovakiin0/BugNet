import express from "express";
const router = express.Router();

import { loginUser, registerUser } from "../controllers/auth.controller";

router.post("/", loginUser);
router.post("/register", registerUser);

export default router;
