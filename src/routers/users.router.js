import { Router } from "express";
import { createUser, readAllUsers, readUserById } from "../controllers/users.controllers.js";
import { sign } from "../controllers/login.controller.js";
import { verifyEmailExists, verifyUserExists } from "../middlewares/users.middleware.js";


export const usersRouter = Router();

usersRouter.post("/user/login", sign);
usersRouter.post("/user", createUser);
usersRouter.use("/user", verifyEmailExists);
usersRouter.get("/users", readAllUsers);
usersRouter.get("/user/:id", readUserById);
usersRouter.use("/user/:id", verifyUserExists);
