const { Client } = require("pg");

const client = new Client({
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "password",
  database: "postgres-demo",
});

export default client;
