import express from "express";
import { routes } from "./routers/index.js";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3000, () => {
  console.log("Server running...");
});
