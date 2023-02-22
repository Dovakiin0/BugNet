import { Response, Request, NextFunction } from "express";
import * as jwt from "jsonwebtoken";
import prisma, { OmitedUser, User } from "../helper/prismaClient";
import { JWTPayload } from "../@types/jwt";

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
        select: {
          id: true,
          username: true,
          email: true,
          createdAt: true,
          updatedAt: true,
          Github: true,
        },
      });

      req.user = user as unknown as OmitedUser;
      if (!user) {
        res.status(401).json({ message: "Not Authorized" });
      }

      next();
    } catch (error) {
      res.status(401).json({ message: "Not Authorized" });
    }
  }

  if (!token) {
    res.status(401).json({ message: "Not Authorized, No Token" });
  }
};
