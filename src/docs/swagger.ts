const swaggerJSDoc = require("swagger-jsdoc");

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Postman Cloud API",
    version: "1.0.0",
    description: "API documentation for your Node.js application",
  },
  servers: [
    {
      url: "http://localhost:8000",
      description: "Development server",
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
    schemas: {
      Authentication: {
        type: "object",
        required: ["username", "password"],
        properties: {
          id: {
            type: "integer",
            example: 1,
          },
          username: {
            type: "string",
            example: "admin@localhost",
          },
          password: {
            type: "string",
            example: "p@ssw0rd123",
          },
        },
      },
    },
  },
  security: [
    {
      bearerAuth: [],
    },
  ],
};

const options = {
  swaggerDefinition: swaggerDefinition,
  apis: ["./src/routes/*.ts"],
};
const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;
