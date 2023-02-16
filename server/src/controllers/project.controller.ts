import { Request, Response } from "express";
import prisma from "../helper/prismaClient";

const getAllProjects = async (req: Request, res: Response) => {
  try {
    const projects = await prisma.project.findMany();
    if (projects.length <= 0) {
      return res.status(404).json({ message: "No projects found" });
    }
    return res.status(200).json(projects);
  } catch (err) {
    res.status(400).send(JSON.stringify(err));
  }
  return res.status(200).json([]);
};

const getProjectById = async (req: Request, res: Response) => {
  return res.status(200).json({ message: "Hello World" });
};

const createProject = async (req: Request, res: Response) => {
  return res.status(200).json({ message: "Hello World" });
};

const updateProject = async (req: Request, res: Response) => {
  return res.status(200).json({ message: "Hello World" });
};

const deleteProject = async (req: Request, res: Response) => {
  return res.status(200).json({ message: "Hello World" });
};

export {
  getAllProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
};
