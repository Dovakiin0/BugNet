import prisma from "../helper/prismaClient";
import { Request, Response } from "express";

const fetchNotification = async (req: Request, res: Response) => {
  try {
    const notification = await prisma.notification.findMany({
      where: {
        to: (req.user as any).id,
        read: false,
      },
      orderBy: {
        createdAt: "desc",
      },
      take: 5,
    });
    return res.status(200).json(notification);
  } catch (err) {
    res.status(400).json({ error: err });
  }
};

const readNotification = async (req: Request, res: Response) => {
  try {
    const notification = await prisma.notification.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        read: true,
      },
    });
    if (!notification)
      return res.status(400).json({ message: "Error updating notification" });
    return res.status(200).json(notification);
  } catch (err) {
    return res.status(400).json({ error: err });
  }
};

export { readNotification, fetchNotification };
