import express from "express";

import {
  createRecord,
  getRecords,
} from "../controllers/record.controller";

import {
  protect,
} from "../middleware/auth.middleware";

const router = express.Router();

router.post(
  "/",
  protect,
  createRecord
);

router.get(
  "/",
  protect,
  getRecords
);

export default router;