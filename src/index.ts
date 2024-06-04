import { Request, Response } from "express";
import asset from "./routes/asset";

const express = require("express");
const app = express();

const port = process.env.PORT || 8000;

app.get("/api", (req: Request, res: Response) => {
  res.send({ message: "Hello World!" });
});

app.use("/users", asset);

app.listen(port, () => {
  console.log("Server listening on port 8000");
});
