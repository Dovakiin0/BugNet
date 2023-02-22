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
};
export default prisma;
