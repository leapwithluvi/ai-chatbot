import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import routes from "./routes/routes";

dotenv.config();
const app = express();
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;

if (!process.env.OLLAMA_API_URL) {
  throw new Error("OLLAMA_API_URL is not defined in .env");
}
if (!process.env.MODEL_NAME) {
  throw new Error("MODEL_NAME is not defined in .env");
}
export const OLLAMA_API_URL = process.env.OLLAMA_API_URL;
export const MODEL = process.env.MODEL_NAME;

app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
