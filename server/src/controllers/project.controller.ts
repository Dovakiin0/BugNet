import { Request, Response } from "express";
import prisma, { Project, User } from "../helper/prismaClient";

const getAllProjects = async (req: Request, res: Response) => {
  try {
    console.log((req.user as User).username);
    const projects: Project[] = await prisma.project.findMany();
    if (projects.length <= 0) {
      return res.status(404).json({ message: "No projects found" });
    }
    res.status(200).json(projects);
  } catch (err) {
    res.status(400).json({ message: "Something went wrong", error: err });
  }
};

const getProjectById = async (req: Request, res: Response) => {
  try {
    const project = await prisma.project.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });
    if (!project) {
      return res.status(404).json({ message: "No project found" });
    }
    res.status(200).json(project);
  } catch (err) {
    res.status(400).json({ message: "Something went wrong", error: err });
  }
};

const createProject = async (req: Request, res: Response) => {
  try {
    const projectBody: Project = req.body;
    const project = await prisma.project.create({
      data: {
        title: projectBody.title,
        description: projectBody.description,
        ownerId: projectBody.ownerId,
      },
    });
    if (!project)
      return res.status(400).json({ message: "Error creating project" });
    res.status(201).json(project);
  } catch (err) {
    res.status(400).json({ message: "Something went wrong", error: err });
  }
};

const updateProject = async (req: Request, res: Response) => {
  try {
    const projectBody: Project = req.body;
    const project = await prisma.project.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        title: projectBody.title,
        description: projectBody.description,
      },
    });
    if (!project)
      return res.status(400).json({ message: "Error updating project" });
    res.status(200).json(project);
  } catch (err) {
    res.status(400).json({ message: "Something went wrong", error: err });
  }
};

const deleteProject = async (req: Request, res: Response) => {
  try {
    const project = await prisma.project.delete({
      where: {
        id: Number(req.params.id),
      },
    });
    if (!project)
      return res.status(400).json({ message: "Error deleting project" });
    res.status(200).json({ message: "Delete Successfull" });
  } catch (err) {
    res.status(400).json({ message: "Something went wrong", error: err });
  }
};

// Add members to the project

export {
  getAllProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
};
