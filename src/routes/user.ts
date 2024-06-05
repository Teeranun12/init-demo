import express, { Request, Response } from "express";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  const data = {
    "usersId": 20,
    "name": "John",
    "age": 30,
    "city": "New York",
    "country": "USA"
}

  return res.send(data);
});

router.post("/post", (req: Request, res: Response) => {
  //add new user
  return res.send("post");
});

router.patch("/patch", (req: Request, res: Response) => {
  const data = {
    "usersId": 20,
    "first_name": "John",
    "last_name": "doe",
    "city": "New York",
    "country": "USA"
  }

  console.log(data)

  //TODO: add update Data
  return res.send("patch");
});
export default router;