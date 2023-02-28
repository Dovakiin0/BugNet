import express from "express";
const router = express.Router();

import { getRepos, getIssues } from "../controllers/github.controller";

router.get("/repo", getRepos);
router.get("/issue/:repo", getIssues);

export default router;
