import { Router } from "express";
import {
  createLocation,
  deleteLocation,
  readAllLocations,
  readLocationById,
  updateLocation,
} from "../controllers/locations.controller.js";
import { verifyLocationExists } from "../middlewares/locations.middleware.js";

export const locationsRouter = Router();

locationsRouter.get("/locations", readAllLocations);
locationsRouter.post("/location", createLocation);

locationsRouter.use("/location/:id", verifyLocationExists);
locationsRouter.get("/location/:id", readLocationById);
locationsRouter.put("/location/:id", updateLocation);
locationsRouter.delete("/location/:id", deleteLocation);
