import express from "express";
import { routes } from "./routers/index.js";

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3000, () => {
  console.log("Server running...");
});
