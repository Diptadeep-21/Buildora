import { Request, Response } from "express";

import bcrypt from "bcryptjs";

import prisma from "../config/prisma";

import { generateToken } from "../utils/generateToken";

/*
  SIGNUP
*/

export const signup = async (
  req: Request,
  res: Response
) => {

  try {

    const { email, password } =
      req.body;

    /*
      VALIDATION
    */

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message:
          "All fields required",
      });
    }

    /*
      EXISTING USER
    */

    const existingUser =
      await prisma.user.findUnique({
        where: { email },
      });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message:
          "User already exists",
      });
    }

    /*
      HASH PASSWORD
    */

    const hashedPassword =
      await bcrypt.hash(password, 10);

    /*
      CREATE USER
    */

    const user =
      await prisma.user.create({
        data: {
          email,
          password:
            hashedPassword,
        },
      });

    /*
      TOKEN
    */

    const token =
      generateToken(user.id);

    res.status(201).json({
      success: true,

      token,

      user: {
        id: user.id,
        email: user.email,
      },
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message:
        "Signup failed",
    });
  }
};

/*
  LOGIN
*/

export const login = async (
  req: Request,
  res: Response
) => {

  try {

    const { email, password } =
      req.body;

    /*
      FIND USER
    */

    const user =
      await prisma.user.findUnique({
        where: { email },
      });

    if (!user) {
      return res.status(400).json({
        success: false,
        message:
          "Invalid credentials",
      });
    }

    /*
      CHECK PASSWORD
    */

    const isMatch =
      await bcrypt.compare(
        password,
        user.password
      );

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message:
          "Invalid credentials",
      });
    }

    /*
      TOKEN
    */

    const token =
      generateToken(user.id);

    res.status(200).json({
      success: true,

      token,

      user: {
        id: user.id,
        email: user.email,
      },
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message:
        "Login failed",
    });
  }
};