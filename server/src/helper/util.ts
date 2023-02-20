import jwt from "jsonwebtoken";
import * as bcrypt from "bcryptjs";

export const hashPassword = async (password: string): Promise<string> => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

export const generateJWT = (id: number): string => {
  return jwt.sign({ id }, process.env.JWT_SECRET as string, {
    expiresIn: "30d",
  });
};

export const comparePwd = async (
  password: string,
  hashPwd: string
): Promise<boolean> => {
  return await bcrypt.compare(password, hashPwd);
};
