import express from "express";
import {
  getUsersForSideBar,
  getMessages,
  sendMessage,
} from "../controllers/message.controller.js";
import { authenticateToken } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/users", authenticateToken, getUsersForSideBar);

router.get("/:id", authenticateToken, getMessages);
export default router;

router.post("/send/:id", authenticateToken, sendMessage);
