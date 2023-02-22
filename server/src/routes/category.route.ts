import express from "express";
const router = express.Router();

import {
  createCategory,
  updateCategory,
  deleteCategory,
} from "../controllers/category.controller";

router.post("/:pid", createCategory);
router.put("/:id", updateCategory);
router.delete("/:id", deleteCategory);

export default router;
