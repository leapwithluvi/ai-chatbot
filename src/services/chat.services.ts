import axios from "axios";
import { OLLAMA_API_URL, MODEL } from "../index";

export const generateReply = async (message: string) => {
  try {
    const { data } = await axios.post(`${OLLAMA_API_URL}/api/chat`, {
      model: MODEL,
      messages: [{ role: "user", content: message }],
      stream: false,
    });
    return data?.message?.content || "AI not respone";
  } catch (error) {
    console.error("Error generating reply:", error);
    return "Sorry, AI failed to respone.";
  }
};
