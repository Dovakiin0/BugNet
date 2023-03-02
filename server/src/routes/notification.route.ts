import express from "express";
const router = express.Router();

import {
  fetchNotification,
  readNotification,
} from "../controllers/notification.controller";

router.get("/", fetchNotification);
router.post("/:id", readNotification);

export default router;
