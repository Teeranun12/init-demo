import express, { Request, Response } from "express";

const router = express.Router();

/**
 * @swagger
 * /asset:
 *   get:
 *     tags:
 *       - User
 *     summary: Get user information
 *     description: Returns information about a user
 *     responses:
 *       200:
 *         description: Returns user information
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 usersId:
 *                   type: integer
 *                 name:
 *                   type: string
 *                 age:
 *                   type: integer
 *                 city:
 *                   type: string
 *                 country:
 *                   type: string
 */
router.get("/", (req: Request, res: Response) => {
  const data = {
    usersId: 20,
    name: "John",
    age: 30,
    city: "New York",
    country: "USA",
  };

  return res.json(data);
});

/**
 * @swagger
 * /asset/post:
 *   post:
 *     tags:
 *       - User
 *     summary: Add a new user
 *     description: Adds a new user to the system
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               usersId:
 *                 type: integer
 *               name:
 *                 type: string
 *               age:
 *                 type: integer
 *               city:
 *                 type: string
 *               country:
 *                 type: string
 *     responses:
 *       200:
 *         description: User added successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 usersId:
 *                   type: integer
 *                 name:
 *                   type: string
 *                 age:
 *                   type: integer
 *                 city:
 *                   type: string
 *                 country:
 *                   type: string
 * 
 */

router.post("/post", (req: Request, res: Response) => {
  return res.send("post");
});

router.patch("/patch", (req: Request, res: Response) => {
  const data = {
    usersId: 20,
    first_name: "John",
    last_name: "doe",
    city: "New York",
    country: "USA",
  };

  console.log(data);

  return res.send("patch");
});
export default router;