import express from "express";
const router = express.Router();

import { fetchNotification } from "../controllers/notification.controller";

router.get("/", fetchNotification);

export default router;
