import express, { Request, Response } from "express";

const router = express.Router();

//Comment Cast4
router.get("/", (req: Request, res: Response) => {
  const data = {
    usersId: 20,
    name: "John",
    age: 30,
    city: "New York",
    country: "USA",
  };

  return res.send(data);
});

//Comment Cast3
router.post("/post", (req: Request, res: Response) => {
  return res.send("post");
});

//Comment Cast2
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

//Comment Cast1
export default router;
