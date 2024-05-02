import { Router } from "express";
import {
  createLocation,
  deleteLocation,
  readAllLocations,
  readLocationById,
  updateLocation,
} from "../controllers/locations.controller.js";
import { verifyLocationExists } from "../middlewares/locations.middleware.js";
import { hasAuthorization } from "../middlewares/auth.middleware.js";

export const locationsRouter = Router();

locationsRouter.get("/locations", readAllLocations);
locationsRouter.post("/location", hasAuthorization, createLocation);

locationsRouter.use("/location/:id", verifyLocationExists);
locationsRouter.get("/location/:id", readLocationById);
locationsRouter.put("/location/:id", hasAuthorization, updateLocation);
locationsRouter.delete("/location/:id", hasAuthorization, deleteLocation);
