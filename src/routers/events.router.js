import { Router } from "express";
import {
    readAllEvents,
    readEventById,
    createEvent,
    updateEvent,
    deleteEvent,
} from "../controllers/events.controller.js";

export const eventsRouter = Router();

eventsRouter.get("/events", readAllEvents);
eventsRouter.get("/event/:id", readEventById);
eventsRouter.post("/event", createEvent);
eventsRouter.put("/event/:id", updateEvent);
eventsRouter.delete("/event/:id", deleteEvent);
