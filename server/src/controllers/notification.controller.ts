import prisma from "../helper/prismaClient";
import { Request, Response } from "express";

const fetchNotification = async (req: Request, res: Response) => {
  try {
    const notification = await prisma.notification.findMany({
      where: {
        to: (req.user as any).id,
      },
      orderBy: {
        createdAt: "desc",
      },
      take: 5,
    });
  } catch (err) {
    res.status(400).json({ error: err });
  }
};

export { fetchNotification };
