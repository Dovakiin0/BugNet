import express, { Express } from "express";
import dotenv from "dotenv";
dotenv.config();

const app: Express = express();
const PORT = 3030;

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default server;
