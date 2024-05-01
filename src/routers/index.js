import { Router } from "express";
import { categoriesRouter } from "./categories.router.js";
import { locationsRouter } from "./locations.router.js";
import { eventsRouter } from "./events.router.js";
import { usersRouter } from "./users.router.js";

export const routes = Router();

routes.use(categoriesRouter, locationsRouter, eventsRouter, usersRouter);


