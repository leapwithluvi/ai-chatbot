import { Request, Response } from "express";
import { generateReply } from "../services/chat.services";

export const sendMessage = (req: Request, res: Response) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Message required" });
  }

  const ai_reply = generateReply(message);
  res.json({ ai_reply });
  return sendMessage;
};
