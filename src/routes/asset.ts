import express, { Request, Response } from "express";

const router = express.Router();

router.get("/assets", (req: Request, res: Response) => {
  res.send("Hello World!");
});

router.put("/put", (req: Request, res: Response) => {
  res.send("put");
});

router.post("/post", (req: Request, res: Response) => {
  res.send("post");
});

router.patch("/patch", (req: Request, res: Response) => {
  res.send("patch");
});
export default router;
