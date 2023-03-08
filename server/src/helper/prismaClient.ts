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
  Board,
  Kanban,
} from "@prisma/client";

// export prisma client after initialization
const prisma = new PrismaClient();

type OmitedUser = Omit<User, "password">;

export {
  Project,
  User,
  Category,
  Member,
  Bug,
  Comment,
  Assignee,
  Github,
  OmitedUser,
  Kanban,
  Board,
};
export default prisma;
