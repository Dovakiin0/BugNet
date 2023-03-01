import express, { Express } from "express";
import dotenv from "dotenv";
import http from "http";
import InjectRoutes from "./routes/router";
import cors from "cors";
import session from "express-session";
import passport from "passport";
import { Server } from "socket.io";
import InitializeSocket from "./config/socket";
dotenv.config();

const app: Express = express();
const server = http.createServer(app);
const io = new Server(server);

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
app.use(passport.initialize());
app.use(passport.session());

// add all routes for the application
InjectRoutes(app);
// Initialize socket for the application
InitializeSocket(io);

export default server;
