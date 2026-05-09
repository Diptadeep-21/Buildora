import {
    Response,
} from "express";

import prisma from "../config/prisma";

import {
    AuthRequest,
} from "../middleware/auth.middleware";

/*
  CREATE CONFIG
*/

export const createConfig =
    async (
        req: AuthRequest,
        res: Response
    ) => {

        try {

            const { name, config } =
                req.body;

            const savedConfig =
                await prisma.appConfig.create({
                    data: {
                        name,
                        config,

                        userId:
                            req.userId as string,
                    },
                });

            res.status(201).json({
                success: true,
                config: savedConfig,
            });

        } catch (error) {

            res.status(500).json({
                success: false,
                message:
                    "Failed to save config",
            });
        }
    };

/*
  GET USER CONFIGS
*/

export const getConfigs =
    async (
        req: AuthRequest,
        res: Response
    ) => {

        try {

            const configs =
                await prisma.appConfig.findMany({
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
                configs,
            });

        } catch (error) {

            res.status(500).json({
                success: false,
                message:
                    "Failed to fetch configs",
            });
        }
    };

export const deleteConfig =
    async (
        req: AuthRequest,
        res: Response
    ) => {

        try {

            const id =
                req.params.id as string;

            await prisma.appConfig.delete({
                where: {
                    id,
                },
            });

            res.json({
                success: true,
                message:
                    "Config deleted",
            });

        } catch (error) {

            res.status(500).json({
                success: false,
                message:
                    "Delete failed",
            });
        }
    };