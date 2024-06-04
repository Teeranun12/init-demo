import express, { Request, Response } from "express";

const router = express.Router();

router.get("/get", (req: Request, res: Response) => {
  console.log("get asset");

  return res.send("Hello World!");
});

router.put("/put", (req: Request, res: Response) => {
  return res.send("put");
});

router.post("/post", (req: Request, res: Response) => {
  return res.send("post");
});

router.patch("/patch", (req: Request, res: Response) => {
  return res.send("patch");
});
export default router;
