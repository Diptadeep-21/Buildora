import {
  Request,
  Response,
  NextFunction,
} from "express";

import jwt from "jsonwebtoken";

/*
  CUSTOM REQUEST TYPE
*/

export interface AuthRequest
  extends Request {

  userId?: string;
}

/*
  MIDDLEWARE
*/

export const protect = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {

  try {

    /*
      TOKEN
    */

    const authHeader =
      req.headers.authorization;

    if (
      !authHeader ||
      !authHeader.startsWith(
        "Bearer "
      )
    ) {

      return res.status(401).json({
        success: false,
        message:
          "Unauthorized",
      });
    }

    /*
      EXTRACT TOKEN
    */

    const token =
      authHeader.split(" ")[1];

    /*
      VERIFY TOKEN
    */

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET as string
    ) as {
      userId: string;
    };

    /*
      ATTACH USER
    */

    req.userId =
      decoded.userId;

    next();

  } catch (error) {

    return res.status(401).json({
      success: false,
      message:
        "Invalid token",
    });
  }
};