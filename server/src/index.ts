import express, { Request, Response, Express } from "express";
import dotenv from "dotenv";
dotenv.config();

const app: Express = express();
const PORT = 3030;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
