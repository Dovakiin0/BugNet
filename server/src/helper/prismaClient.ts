import {
  PrismaClient,
  Project,
  User,
  Category,
  Member,
  Bug,
  Comment,
  Assignee,
  Github,
} from "@prisma/client";

const prisma = new PrismaClient();

export { Project, User, Category, Member, Bug, Comment, Assignee, Github };
export default prisma;
