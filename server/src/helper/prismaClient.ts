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

// export prisma client after initialization
const prisma = new PrismaClient();

export { Project, User, Category, Member, Bug, Comment, Assignee, Github };
export default prisma;
