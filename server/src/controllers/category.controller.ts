import { Request, Response } from "express";
import prisma, { Category } from "../helper/prismaClient";

const createCategory = async (req: Request, res: Response) => {
  try {
    const categoryBody: Category = req.body;
    const category = await prisma.category.create({
      data: {
        title: categoryBody.title,
        projectId: Number(req.params.pid),
      },
    });
    if (!category)
      return res.status(400).json({ message: "Error creating category" });
    res.status(201).json(category);
  } catch (err) {
    res.status(400).json({ message: "Something went wrong", error: err });
  }
};

const updateCategory = async (req: Request, res: Response) => {
  try {
    const categoryBody: Category = req.body;
    const category = await prisma.category.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        title: categoryBody.title,
      },
    });
    if (!category)
      return res.status(400).json({ message: "Error updating category" });
    res.status(200).json(category);
  } catch (err) {
    res.status(400).json({ message: "Something went wrong", error: err });
  }
};

const deleteCategory = async (req: Request, res: Response) => {
  try {
    const category = await prisma.category.delete({
      where: {
        id: Number(req.params.id),
      },
    });
    if (!category)
      return res.status(400).json({ message: "Error deleting category" });
    res.status(200).json({ message: "Delete Successfull" });
  } catch (err) {
    res.status(400).json({ message: "Something went wrong", error: err });
  }
};

export { createCategory, updateCategory, deleteCategory };
