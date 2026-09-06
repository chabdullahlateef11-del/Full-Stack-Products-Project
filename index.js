import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./Utils/db.js";
import productRoutes from "./Routes/urls.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/products", productRoutes);

app.listen(5050, () => {
    console.log("Server is running on port 5050");
});