import express, { Express } from "express";
import dotenv from "dotenv";
import Bootstrap from "./routes/router";
dotenv.config();

const app: Express = express();

Bootstrap(app);

export default app;
