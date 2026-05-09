import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import prisma from "./config/prisma";
import authRoutes from "./routes/auth.routes";
import configRoutes from "./routes/config.routes";

import recordRoutes from "./routes/record.routes";

import aiRoutes from "./routes/ai.routes";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

/*
  TEST ROUTE
*/

app.use("/api/auth", authRoutes);

app.use(
  "/api/configs",
  configRoutes
);

app.use(
  "/api/records",
  recordRoutes
);

app.use(
  "/api/ai",
  aiRoutes
);

app.get("/reset-configs", async (_, res) => {

  await prisma.appConfig.deleteMany();

  res.json({
    success: true,
    message: "Configs deleted",
  });
});

app.get("/", async (_, res) => {

  const users = await prisma.user.findMany();

  res.json({
    success: true,
    message:
      "AI App Generator API Running",
    users,
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  );
});