import { Router } from "express";
import {
  readAllCategories,
  readCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../controllers/categories.controller.js";
import { verifyCategoryExists } from "../middlewares/categories.middleware.js";
import { hasAuthorization } from "../middlewares/auth.middleware.js";

export const categoriesRouter = Router();

categoriesRouter.get("/categories", readAllCategories);
categoriesRouter.post("/category", hasAuthorization, createCategory);

categoriesRouter.use("/category/:id", verifyCategoryExists);
categoriesRouter.get("/category/:id", readCategoryById);
categoriesRouter.put("/category/:id", hasAuthorization, updateCategory);
categoriesRouter.delete("/category/:id", hasAuthorization, deleteCategory);
