import { Request, Response } from "express";
import asset from "./routes/asset";

const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./docs/swagger");
const express = require("express");
const app = express();

const port = 8000;

app.use("/api", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/asset", asset);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
