import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./Utils/db.js";
import productRoutes from "./Routes/urls.js";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));
connectDB();

app.use("/api/products", productRoutes);

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(5050, () => {
    console.log("Server is running on port 5050");
});