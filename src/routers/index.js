import { Router } from "express";
import { locationsRouter } from "./locations.router.js";

export const routes = Router();

routes.use(locationsRouter);
