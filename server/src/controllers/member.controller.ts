import { Request, Response } from "express";
import prisma from "../helper/prismaClient";

const getAllMember = async (req: Request, res: Response) => {
  try {
    const members = await prisma.member.findMany({
      where: {
        projectId: Number(req.params.pid),
      },
    });

    if (members.length <= 0) {
      return res.status(404).json({ message: "No Members found" });
    }

    res.status(200).json(members);
  } catch (err) {
    res.status(400).send(JSON.stringify(err));
  }
};

const createMember = async (req: Request, res: Response) => { };

export { createMember, getAllMember };
