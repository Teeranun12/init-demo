import express, { Request, Response } from "express";
import client from "../config/datasource";

const router = express.Router();

/**
 * @swagger
 * /tests:
 *   post:
 *     tags:
 *        - Example
 *     summary: register
 *     description: register
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               usersId:
 *                 type: number
 *               name:
 *                 type: string
 *               age:
 *                 type: number
 *               city:
 *                 type: string
 *               country:
 *                 type: string
 *     responses:
 *       201:
 *         description: Successful login response.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 firstname:
 *                  type: string
 *                 lastname:
 *                  type: string
 *                 email:
 *                  type: string
 *                 phone:
 *                  type: string
 */
router.post("/", (req: Request, res: Response) => {
  const { usersId, name, age, city, country } = req.body;
  client.query(
    `
    INSERT INTO "user" (first_name, last_name, email) 
    VALUES ($1, $2, $3)
  `,
    ["john2", "doe2", "john2@gmail.com"],
    (err: any, result: any) => {
      if (err) {
        console.log("error = ", err);
        return res.status(500).send("Database error");
      }
      console.log(result, " = result");

      const data = `${usersId}, ${name}, ${age}, ${city}, ${country}`;
      return res.send(data);
    }
  );
});

/**
 * @swagger
 * /tests:
 *   get:
 *     tags:
 *       - Example
 *     summary: Get a list of users
 *     description: Retrieve a list of users from the database.
 *     responses:
 *       201:
 *         description: Successful login response.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 usersId:
 *                  type: number
 *                 name:
 *                  type: string
 *                 age:
 *                  type: number
 *                 city:
 *                  type: string
 *                 country:
 *                  type: string
 *       404:
 *         description: Not Found
 *
 */
router.get("/", (req: Request, res: Response) => {
  client.query(`SELECT * FROM "user"`, (err: any, result: any) => {
    if (err) {
      console.log("error = ", err);
      return res.status(500).send("Database error");
    }
    console.log(result.rows, " = result");

    const data = {
      users: result.rows,
      additionalInfo: {
        usersId: 20,
        name: "John",
        age: 30,
        city: "New York",
        country: "USA",
      },
    };

    return res.send(data);
  });
});

export default router;
