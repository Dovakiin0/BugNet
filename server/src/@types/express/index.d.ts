import { OmitedUser } from "../../helper/prismaClient";
import { Express } from "express-serve-static-core";

declare module "express-serve-static-core" {
  interface Request {
    user: OmitedUser;
  }
  interface Response {}
}
