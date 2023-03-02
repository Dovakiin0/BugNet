import { Request, Response } from "express";
import prisma, { Member, User } from "../helper/prismaClient";

const createMember = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
      select: {
        id: true,
      },
    });

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const member: Member = await prisma.member.create({
      data: {
        userId: user.id,
        projectId: Number(req.params.pid),
      },
      include: {
        Project: true,
        User: {
          select: {
            username: true,
            id: true,
          },
        },
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

const updateMemberStatus = async (req: Request, res: Response) => {
  try {
    const member = await prisma.member.findFirst({
      where: {
        userId: (req.user as User).id,
        projectId: Number(req.params.pid),
      },
    });
    if (!member) {
      return res.status(404).json({ message: "No member found" });
    }
    await prisma.member.update({
      where: {
        id: member.id,
      },
      data: {
        status: req.body.status,
      },
    });
    res.status(200).json({
      message: "Member Status updated successfully",
    });
  } catch (err) {
    res.status(400).json({ message: "Something went wrong", error: err });
  }
};

export { createMember, deleteMember, updateMemberStatus };
