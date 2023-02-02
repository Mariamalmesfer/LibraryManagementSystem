import {User} from "@prisma/client";
import { Request, Response } from "express";
import { prisma } from "../config/db";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import * as argon2 from "argon2";

export const Register = async (req: Request, res: Response) => {
  try {
    const newUser = req.body as User;
    const hashPassword = await argon2.hash(newUser.password);
    newUser.password = hashPassword;
     await prisma.user.create({
      data: newUser,
    });
    res.status(201).json({
      message: " added user successfully",
    });
  } catch (error) {
    const prismaError = error as PrismaClientKnownRequestError;
    return res.status(400).json({
      message: prismaError.message,
    });
  }
};

export const Login = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body as User;
    console.log(username,'gfgfg');
  
    const login = await prisma.user.findFirst({
      where: {
        username,
      },
    });
    const isValidPassword = await argon2.verify(login!.password, password);

  if (!isValidPassword) {
    return res.status(400).json({
      message: 'Wrong username or password',
    });
  }
    res.status(200).json({
      message: `Welcome back!${username}`
    });
  } catch (error) {
    const prismaError = error as PrismaClientKnownRequestError;
    return res.status(400).json({
      message: prismaError.message,
    });
  }
};
