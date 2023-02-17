import {
  Request as ExpressRequest,
  Response as ExpressResponse,
} from "express";
import { User } from "../helper/prismaClient";

export interface Response extends ExpressResponse {}

export interface Request extends ExpressRequest {
  user?: User;
}

export interface JWTPayload {
  id: number;
}
