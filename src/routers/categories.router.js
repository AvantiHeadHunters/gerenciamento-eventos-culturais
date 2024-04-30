import { Router } from "express";
import {
  readAllCategories,
  readCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../controllers/categories.controller.js";
import { verifyCategoryExists } from "../middlewares/categories.middleware.js";

export const categoriesRouter = Router();

categoriesRouter.get("/categories", readAllCategories);
categoriesRouter.post("/category", createCategory);

categoriesRouter.use("/category/:id", verifyCategoryExists);
categoriesRouter.get("/category/:id", readCategoryById);
categoriesRouter.put("/category/:id", updateCategory);
categoriesRouter.delete("/category/:id", deleteCategory);
