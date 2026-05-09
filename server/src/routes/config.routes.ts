import express from "express";

import {
  createConfig,
  getConfigs,
  deleteConfig,
} from "../controllers/config.controller";

import {
  protect,
} from "../middleware/auth.middleware";

const router = express.Router();

/*
  PROTECTED ROUTES
*/

router.post(
  "/",
  protect,
  createConfig
);

router.get(
  "/",
  protect,
  getConfigs
);
router.delete(
  "/:id",
  protect,
  deleteConfig
);

export default router;