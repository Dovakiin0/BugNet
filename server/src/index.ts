import express, { Express } from "express";
import dotenv from "dotenv";
import Bootstrap from "./routes/router";
dotenv.config();

const app: Express = express();
const PORT = 3030;

Bootstrap(app);

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default server;
