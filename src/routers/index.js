import { Router } from "express";
import { locationsRouter } from "./locations.router.js";
import { eventsRouter } from "./events.router.js";

export const routes = Router();

routes.use(locationsRouter);
routes.use(eventsRouter);
