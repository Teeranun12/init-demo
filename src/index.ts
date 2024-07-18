import user from "./routes/user";
import bodyParser from "body-parser";
import tests from "./routes/tests";
import client from "./config/datasource";

const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./docs/swagger");
const express = require("express");
const app = express();

const port = 8000;

client.connect();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/asset", user);
app.use("/tests", tests);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

