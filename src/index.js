"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("./routes/user"));
const body_parser_1 = __importDefault(require("body-parser"));
const tests_1 = __importDefault(require("./routes/tests"));
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./docs/swagger");
const express = require("express");
const app = express();
const port = 8000;
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use("/api", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/asset", user_1.default);
app.use("/tests", tests_1.default);
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
