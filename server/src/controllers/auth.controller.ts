import prisma, { User } from "../helper/prismaClient";
import {
  generateJWT,
  hashPassword,
  comparePwd,
  verifyJWT,
} from "../helper/util";
import { Request, Response } from "express";

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

  return res.status(201).json({ token: generateJWT(user.id) });
};

const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  // check if user exist:s
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    return res.status(400).json({ message: "Invalid Credentials" });
  }

  if (user.password && !(await comparePwd(password, user.password))) {
    return res.status(400).json({ message: "Incorrect Email or Password" });
  }

  res.status(200).json({ token: generateJWT(user.id) });
};

const getMe = async (req: Request, res: Response) => {
  res.status(200).json(req.user);
};

const updateUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body;
    const user = await prisma.user.findUnique({
      where: { id: (req.user as any).id },
    });
    if (!user) {
      return res.status(403).json({ message: "Forbidden" });
    }
    let updatedUser = await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        ...userData,
      },
    });
    return res.status(200).json(updatedUser);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const loginOauth = (req: Request, res: Response) => {
  const token = generateJWT((req.user as any).id);
  res.redirect(
    `${process.env.CLIENT_OAUTH_CALLBACK}?token=${token}&from=${(req.session as any).from}`,
  );
};

export { loginUser, registerUser, getMe, loginOauth, updateUser };
