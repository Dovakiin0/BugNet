import { Request, Response } from "express";
import prisma, { User } from "../helper/prismaClient";

const getAllBugs = async (req: Request, res: Response) => {
  try {
    const bugs = await prisma.bug.findMany({
      where: {
        projectId: Number(req.params.pid),
      },
    });
    if (!bugs) return res.status(400).json({ message: "Error fetching bugs" });
    res.status(200).json(bugs);
  } catch (err) {
    res.status(400).json({ message: "Something went wrong", error: err });
  }
};

const getBugById = async (req: Request, res: Response) => {
  try {
    const bug = await prisma.bug.findUnique({
      where: {
        id: Number(req.params.id),
      },
      include: {
        Assignee: true,
        Comment: {
          include: {
            User: true,
          },
        },
        Project: true,
        User: true,
      },
    });
    if (!bug) return res.status(400).json({ message: "Error fetching bug" });
    res.status(200).json(bug);
  } catch (err) {
    res.status(400).json({ message: "Something went wrong", error: err });
  }
};

const createBug = async (req: Request, res: Response) => {
  try {
    const bug = await prisma.bug.create({
      data: {
        title: req.body.title,
        description: req.body.description,
        projectId: Number(req.params.pid),
        priority: Number(req.body.priority),
        status: "Open",
        openedBy: (req.user as User).id,
      },
    });
    if (!bug) return res.status(400).json({ message: "Error creating bug" });
    res.status(201).json(bug);
  } catch (err) {
    res.status(400).json({ message: "Something went wrong", error: err });
  }
};

const updateBug = async (req: Request, res: Response) => {
  try {
    const bug = await prisma.bug.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        title: req.body.title,
        description: req.body.description,
        priority: Number(req.body.priority),
        status: req.body.status,
        categoryId: Number(req.body.categoryId),
      },
    });
    if (!bug) return res.status(400).json({ message: "Error updating bug" });
    res.status(200).json(bug);
  } catch (err) {
    res.status(400).json({ message: "Something went wrong", error: err });
  }
};

const deleteBug = async (req: Request, res: Response) => {
  try {
    const bug = await prisma.bug.delete({
      where: {
        id: Number(req.params.id),
      },
    });
    if (!bug) return res.status(400).json({ message: "Error deleting bug" });
    res.status(200).json({ message: "Delete Successfull" });
  } catch (err) {
    res.status(400).json({ message: "Something went wrong", error: err });
  }
};

export { getAllBugs, getBugById, createBug, updateBug, deleteBug };
