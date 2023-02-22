import { Request, Response } from "express";
import prisma, { Member, User } from "../helper/prismaClient";

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
    res.status(400).json({ message: "Something went wrong", error: err });
  }
};

const createMember = async (req: Request, res: Response) => {
  try {
    const memberBody: Member = req.body;
    const member: Member = await prisma.member.create({
      data: {
        userId: memberBody.userId,
        projectId: memberBody.projectId,
      },
    });
    if (!member) {
      return res.status(400).json({ message: "Error creating member" });
    }
    res.status(201).json(member);
  } catch (err) {
    res.status(400).json({ message: "Something went wrong", error: err });
  }
};

const deleteMember = async (req: Request, res: Response) => {
  try {
    const member = await prisma.member.delete({
      where: {
        id: Number(req.params.id),
      },
    });
    if (!member) {
      return res.status(404).json({ message: "No member found" });
    }
    res.status(200).json({ message: "Member deleted successfully" });
  } catch (err) {
    res.status(400).json({ message: "Something went wrong", error: err });
  }
};

const approveMember = async (req: Request, res: Response) => {
  try {
    const member = await prisma.member.update({
      where: {
        id: (req.user as User).id,
      },
      data: {
        accepted: true,
      },
    });
    if (!member) {
      return res.status(404).json({ message: "No member found" });
    }
    res.status(200).json({ message: "Member approved successfully" });
  } catch (err) {
    res.status(400).json({ message: "Something went wrong", error: err });
  }
};

export { createMember, getAllMember, deleteMember, approveMember };
