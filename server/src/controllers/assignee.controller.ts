import { Request, Response } from "express";
import prisma from "../helper/prismaClient";

const createAssignee = async (req: Request, res: Response) => {
  try {
    const assignee = await prisma.assignee.create({
      data: {
        memberId: Number(req.body.memberId),
        bugId: Number(req.body.bugId),
      },
    });
    if (!assignee)
      return res.status(400).json({ message: "Error creating assignee" });
    res.status(201).json(assignee);
  } catch (err) {
    res.status(400).json({ message: "Something went wrong", error: err });
  }
};

const deleteAssignee = async (req: Request, res: Response) => {
  try {
    const assignee = await prisma.assignee.delete({
      where: { id: Number(req.params.id) },
    });
    if (!assignee)
      return res.status(400).json({ message: "Error Removing assignee" });
    res.status(200).json({ message: "Assignee Removed from Bug" });
  } catch (err) {
    res.status(400).json({ message: "Something went wrong", error: err });
  }
};

export { createAssignee, deleteAssignee };
