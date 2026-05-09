import express from "express";

import {
  generateAppConfig,
} from "../controllers/ai.controller";

const router =
  express.Router();

router.post(
  "/generate",
  generateAppConfig
);

export default router;