import { Router } from "express";
import { categoriesRouter } from "./categories.router.js";
import { locationsRouter } from "./locations.router.js";
import { eventsRouter } from "./events.router.js";

export const routes = Router();

routes.use(eventsRouter, locationsRouter, categoriesRouter);
