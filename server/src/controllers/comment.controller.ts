import { Request, Response } from "express";
import prisma, { User } from "../helper/prismaClient";

const getAllComments = async (req: Request, res: Response) => {
  try {
    let comment = await prisma.comment.findMany({
      where: {
        Bug: {
          Project: {
            Member: {
              some: { userId: (req.user as User).id, status: "Accepted" },
            },
          },
        },
      },
      take: 10,
      orderBy: { createdAt: "desc" },
      include: {
        User: {
          select: {
            username: true,
            avatar: true,
            id: true,
          },
        },
        Bug: {
          include: {
            Project: true,
          },
        },
      },
    });
    if (comment.length <= 0) return res.status(200).send([]);
    comment = comment.filter((c: any) => c.userId !== (req.user as User).id);
    return res.status(200).json(comment);
  } catch (error) {
    res.status(400).json({ error });
  }
};

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

export { createComment, updateComment, deleteComment, getAllComments };
