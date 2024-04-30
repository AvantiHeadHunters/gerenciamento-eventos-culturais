import { Router } from "express";
import {
    readAllEvents,
    readEventById,
    createEvent,
    updateEvent,
    deleteEvent,
} from "../controllers/events.controller.js";
import { verifyEventExists } from "../middlewares/events.middleware.js";

export const eventsRouter = Router();

eventsRouter.get("/events", readAllEvents);
eventsRouter.post("/event", createEvent);

eventsRouter.use("/event/:id", verifyEventExists);
eventsRouter.get("/event/:id", readEventById);
eventsRouter.put("/event/:id", updateEvent);
eventsRouter.delete("/event/:id", deleteEvent);
