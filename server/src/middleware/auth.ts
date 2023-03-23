import { Response, Request, NextFunction } from "express";
import prisma, { OmitedUser, User } from "../helper/prismaClient";
import { verifyJWT } from "../helper/util";

export const auth = async (req: Request, res: Response, next: NextFunction) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      // Verify the token
      const decoded = verifyJWT(token);

      const user = await prisma.user.findUnique({
        where: { id: decoded.id },
        select: {
          id: true,
          username: true,
          email: true,
          avatar: true,
          createdAt: true,
          updatedAt: true,
          Github: true,
        },
      });

      if (!user) {
        return res.status(401).json({ message: "Not Authorized" });
      }

      req.user = user as unknown as OmitedUser;
      next();
    } catch (error) {
      res.status(401).json({ message: "Not Authorized" });
    }
  }

  if (!token) {
    res.status(401).json({ message: "Not Authorized, No Token" });
  }
};
