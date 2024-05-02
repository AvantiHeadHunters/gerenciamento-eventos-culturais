import { Router } from "express";
import {
  createUser,
  readAllUsers,
  readUserById,
} from "../controllers/users.controllers.js";
import { sign } from "../controllers/login.controller.js";
import {
  verifyEmailExists,
  verifyUserExists,
} from "../middlewares/users.middleware.js";
import {
  hasAuthorization,
  isAutenticated,
} from "../middlewares/auth.middleware.js";

export const usersRouter = Router();

usersRouter.post("/user/login", sign);

// usersRouter.get("/users", hasAuthorization, readAllUsers);
usersRouter.get("/users", readAllUsers);
usersRouter.post("/user", verifyEmailExists, createUser);

usersRouter.use("/user/:id", verifyUserExists, isAutenticated);
usersRouter.get("/user/:id", readUserById);
