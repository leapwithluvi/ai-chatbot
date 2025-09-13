import { Request, Response } from "express";
import { generateReply } from "../services/chat.services";

export const sendMessage = async (req: Request, res: Response) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Message required" });
  }

  const ai_reply = await generateReply(message);
  return res.json({ ai_reply });
};

