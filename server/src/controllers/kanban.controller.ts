import prisma from "../helper/prismaClient";
import { Request, Response } from "express";

const getProjectBoard = async (req: Request, res: Response) => {
  try {
    const kanban = await prisma.kanban.findUnique({
      where: {
        projectId: Number(req.params.pid),
      },
      include: {
        Board: {
          include: {
            Bug: true,
          },
        },
      },
    });
    res.status(200).json(kanban);
  } catch (error) {
    res.status(400).json(error);
  }
};

export { getProjectBoard };
