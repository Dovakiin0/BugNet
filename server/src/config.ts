import express, { Express } from "express";
import dotenv from "dotenv";
import InjectRoutes from "./routes/router";
import cors from "cors";
import session from "express-session";
dotenv.config();

const app: Express = express();

// middlewares for the application
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: process.env.SESSION_SECRET || "bugnet",
    resave: false,
    saveUninitialized: false,
  })
);

// add all routes for the application
InjectRoutes(app);

export default app;
