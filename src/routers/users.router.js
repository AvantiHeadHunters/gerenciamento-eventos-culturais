import { Router } from "express";
import { readAllUsers, readUserById } from "../controllers/users.controllers";


export const usersRouter = Router();

usersRouter.get("/users", readAllUsers);
usersRouter.get("/user/:id", readUserById);
