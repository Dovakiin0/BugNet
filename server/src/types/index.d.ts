import { User } from "../helper/prismaClient";

declare namespace Express {
  export interface Request {
    user?: User;
  }
  export interface Response {}
}

export interface JWTPayload {
  id: number;
}
