import jwt from "jsonwebtoken";
import prisma, { User } from "../helper/prismaClient";
import { hashPassword } from "../helper/util";
import { Request, Response } from "../types";

const loginUser = async (req: Request, res: Response) => {};

const registerUser = async (req: Request, res: Response) => {
  const userBody: User = req.body;
  if (!userBody.email || !userBody.password) {
    return res
      .status(400)
      .json({ message: "Please provide email and password" });
  }
  //check if user already exists
  const userExist = await prisma.user.findUnique({
    where: { email: userBody.email },
    select: { email: true },
  });

  if (userExist) {
    return res.status(409).json({ message: "User already exists" });
  }

  const hshPwd = await hashPassword(userBody.password);

  const user: User = await prisma.user.create({
    data: {
      username: userBody.username,
      email: userBody.email,
      password: hshPwd,
    },
  });
};

export { loginUser, registerUser };
