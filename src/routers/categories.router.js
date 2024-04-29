import { Router } from "express";
import {
  readAllCategories,
  readCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../controllers/categories.controller.js";

export const categoriesRouter = Router();

categoriesRouter.get("/categories", readAllCategories);
categoriesRouter.get("/category/:id", readCategoryById);
categoriesRouter.post("/category", createCategory);
categoriesRouter.put("/category/:id", updateCategory);
categoriesRouter.delete("/category/:id", deleteCategory);
