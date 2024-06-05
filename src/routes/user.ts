import express, { Request, Response } from "express";

const router = express.Router();

//TODO: add swagger
/**
 *
 */
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

//TODO: add swagger

router.post("/post", (req: Request, res: Response) => {
  //TODO : add new user

  return res.send("post");
});

//TODO: add swagger

router.patch("/patch", (req: Request, res: Response) => {
  const data = {
    usersId: 20,
    first_name: "John",
    last_name: "doe",
    city: "New York",
    country: "USA",
  };

  console.log(data);

  //TODO: add update Data
  return res.send("patch");
});
export default router;
