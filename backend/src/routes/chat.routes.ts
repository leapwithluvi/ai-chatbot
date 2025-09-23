import express from "express";
import { sendMessage } from "../controller/chat.controllers";

const router = express.Router();

router.post("/", sendMessage);

export default router;
