import { Response, Request, NextFunction } from "express";
import * as jwt from "jsonwebtoken";
import prisma, { User } from "../helper/prismaClient";
import { JWTPayload } from "../types";

export const auth = async (req: Request, res: Response, next: NextFunction) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      // Verify the token
      const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET as string
      ) as JWTPayload;

      const user = await prisma.user.findUnique({
        where: { id: decoded.id },
      });

      if (!user) {
        res.status(401).json({ message: "Not Authorized" });
      }

      req.user = user as User;
      next();
    } catch (error) {
      res.status(401).json({ message: "Not Authorized" });
    }
  }

  if (!token) {
    res.status(401).json({ message: "Not Authorized, No Token" });
  }
};
