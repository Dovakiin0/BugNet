import express from "express";
import { passport } from "../services/github";
const router = express.Router();

import {
  loginUser,
  registerUser,
  getMe,
  loginOauth,
  updateUser,
} from "../controllers/auth.controller";
import { auth, partialAuth } from "../middleware/auth";

router.get(
  "/github",
  partialAuth,
  passport.authenticate("github", { scope: ["user:email", "repo"] }),
);

router.get(
  "/github/callback",
  passport.authenticate("github", { failureRedirect: "/login" }),
  loginOauth,
);

router.post("/", loginUser);
router.post("/register", registerUser);
router.put("/", auth, updateUser);
router.get("/@me", auth, getMe);

export default router;
