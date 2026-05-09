import {
  Response,
} from "express";

import prisma from "../config/prisma";

import {
  AuthRequest,
} from "../middleware/auth.middleware";

/*
  CREATE RECORD
*/

export const createRecord =
  async (
    req: AuthRequest,
    res: Response
  ) => {

    try {

      const {
        entityName,
        data,
      } = req.body;

      const record =
        await prisma.record.create({
          data: {
            entityName,
            data,

            userId:
              req.userId as string,
          },
        });

      res.status(201).json({
        success: true,
        record,
      });

    } catch (error) {

      res.status(500).json({
        success: false,
        message:
          "Failed to create record",
      });
    }
  };

/*
  GET RECORDS
*/

export const getRecords =
  async (
    req: AuthRequest,
    res: Response
  ) => {

    try {

      const records =
        await prisma.record.findMany({
          where: {
            userId:
              req.userId,
          },

          orderBy: {
            createdAt:
              "desc",
          },
        });

      res.json({
        success: true,
        records,
      });

    } catch (error) {

      res.status(500).json({
        success: false,
        message:
          "Failed to fetch records",
      });
    }
  };