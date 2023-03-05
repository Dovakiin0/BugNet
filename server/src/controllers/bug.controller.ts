import { Request, Response } from "express";
import prisma, { Bug, User } from "../helper/prismaClient";

const getAllBugs = async (req: Request, res: Response) => {
  try {
    const bugs = await prisma.bug.findMany({
      where: {
        OR: [
          {
            Project: {
              ownerId: (req.user as User).id,
            },
          },
          {
            Project: {
              Member: {
                some: {
                  userId: (req.user as User).id,
                  status: "Accepted",
                },
              },
            },
          },
        ],
      },
      include: {
        Project: true,
        User: {
          select: {
            username: true,
            email: true,
            id: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    res.status(200).json(bugs);
  } catch (err) {
    res.status(400).json({ message: "Something went wrong", error: err });
  }
};

const getAssignedBugs = async (req: Request, res: Response) => {
  try {
    const bugs: Bug[] = await prisma.bug.findMany({
      where: {
        Assignee: {
          some: {
            Member: {
              userId: (req.user as User).id,
            },
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
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
        Assignee: {
          include: {
            Member: {
              include: {
                User: {
                  select: {
                    username: true,
                    email: true,
                    id: true,
                  },
                },
              },
            },
          },
        },
        Comment: {
          include: {
            User: {
              select: {
                username: true,
                email: true,
                id: true,
              },
            },
          },
        },
        Project: {
          include: {
            Category: true,
            Member: {
              include: {
                User: {
                  select: {
                    username: true,
                    email: true,
                    id: true,
                  },
                },
              },
            },
          },
        },
        User: {
          select: {
            id: true,
            username: true,
          },
        },
        Category: true,
      },
    });
    if (!bug) return res.status(404).json({ message: "No Bug found" });
    res.status(200).json(bug);
  } catch (err) {
    res.status(400).json({ message: "Something went wrong", error: err });
  }
};

const createBug = async (req: Request, res: Response) => {
  try {
    const bugBody: Bug = req.body;
    const bug = await prisma.bug.create({
      data: {
        title: bugBody.title,
        description: bugBody.description,
        projectId: Number(bugBody.projectId),
        priority: Number(bugBody.priority),
        categoryId: Number(bugBody.categoryId) || null,
        status: "Open",
        openedBy: (req.user as User).id,
        boardId: bugBody.boardId,
      },
    });
    if (!bug) return res.status(400).json({ message: "Error creating bug" });
    res.status(201).json(bug);
  } catch (err) {
    res.status(400).json({ message: "Something went wrong", error: err });
  }
};

const bulkCreateMany = async (req: Request, res: Response) => {
  try {
    const { payload } = req.body;

    /*
    payload: {
     projectId: number,
     title: string,
     description: string,
     status: "open",
     openedBy: number
   }
     */

    const data = payload?.map((bug: Bug) => {
      return {
        projectId: bug.projectId,
        title: bug.title,
        description: bug.description,
        status: "Open",
        openedBy: (req.user as any).id,
        boardId: bug.boardId,
      };
    });

    const bugs = await prisma.bug.createMany({
      data,
    });

    if (bugs.count <= 0) {
      return res.status(400).json({ message: "Error creating bugs" });
    }
    return res.status(201).json({ message: "Bugs created Successfully" });
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
        categoryId:
          req.body.categoryId === null ? null : Number(req.body.categoryId),
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

const toggleBugStatus = async (req: Request, res: Response) => {
  try {
    const bug = await prisma.bug.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        status: req.body.status === "Open" ? "Open" : "Closed",
      },
    });

    if (!bug) return res.status(400).json({ message: "Error updating bug" });
    res.status(200).json(bug);
  } catch (err) {
    res.status(400).json({ message: "Something went wrong", error: err });
  }
};

export {
  getAllBugs,
  getBugById,
  createBug,
  updateBug,
  toggleBugStatus,
  deleteBug,
  getAssignedBugs,
  bulkCreateMany,
};
