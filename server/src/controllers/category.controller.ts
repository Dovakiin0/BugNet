import { Request, Response } from "express";
import prisma, { Category } from "../helper/prismaClient";

const getAllCategories = async (req: Request, res: Response) => {
  try {
    const categories: Category[] = await prisma.category.findMany();
    if (categories.length <= 0) {
      return res.status(404).json({ message: "No categories found" });
    }
    res.status(200).json(categories);
  } catch (err) {
    res.status(400).send(JSON.stringify(err));
  }
};

const createCategory = async (req: Request, res: Response) => {
  try {
    const categoryBody: Category = req.body;
    const category = await prisma.category.create({
      data: {
        title: categoryBody.title,
        projectId: categoryBody.projectId,
      },
    });
    if (!category)
      return res.status(400).json({ message: "Error creating category" });
    res.status(201).json(category);
  } catch (err) {
    res.status(400).send(JSON.stringify(err));
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
    res.status(400).send(JSON.stringify(err));
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
    res.status(400).send(JSON.stringify(err));
  }
};

export { getAllCategories, createCategory, updateCategory, deleteCategory };
