import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import routes from "./routes/routes";

dotenv.config();
const app = express();
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;

app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
