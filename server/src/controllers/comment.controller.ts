import { Request, Response } from "express";
import prisma, { User } from "../helper/prismaClient";

const createComment = async (req: Request, res: Response) => {
  try {
    const comment = await prisma.comment.create({
      data: {
        content: req.body.content,
        bugId: Number(req.params.bid),
        userId: (req.user as User).id,
      },
    });
    if (!comment)
      return res.status(400).json({ message: "Error creating comment" });
    res.status(201).json(comment);
  } catch (err) {
    res.status(400).json({ message: "Something went wrong", error: err });
  }
};

const updateComment = async (req: Request, res: Response) => {
  try {
    const comment = await prisma.comment.update({
      where: { id: Number(req.params.id) },
      data: {
        content: req.body.content,
      },
    });
    if (!comment)
      return res.status(400).json({ message: "Error updating comment" });
    res.status(200).json(comment);
  } catch (err) {
    res.status(400).json({ message: "Something went wrong", error: err });
  }
};

const deleteComment = async (req: Request, res: Response) => {
  try {
    const comment = await prisma.comment.delete({
      where: { id: Number(req.params.id) },
    });
    if (!comment)
      return res.status(400).json({ message: "Error deleting comment" });
    res.status(200).json({ message: "Comment deleted successfully" });
  } catch (err) {
    res.status(400).json({ message: "Something went wrong", error: err });
  }
};

export { createComment, updateComment, deleteComment };
