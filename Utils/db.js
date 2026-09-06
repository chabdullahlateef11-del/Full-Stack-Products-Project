import mongoose from "mongoose";
export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/products");
        console.log("MongoDB connected Successfully!");
    } catch (error) {
        console.error("MongoDB Connection Failed:", error.message);
        process.exit(1);
    }
};
export default connectDB;