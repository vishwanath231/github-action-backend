import express, { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("server is running...");
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log("server is running");
});
