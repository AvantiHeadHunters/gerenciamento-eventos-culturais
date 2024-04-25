import { Router } from "express";
import { readAllEvents } from "../controllers/events.controller.js";

export const eventsRouter = Router();

eventsRouter.get("/events", readAllEvents);
