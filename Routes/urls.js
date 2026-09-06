import express from "express";
import { getProducts,  deletedProduct, updateProduct } from "../Controllers/RedirectURL.js";
import { createProduct } from "../Controllers/SaveURL.js";

const router = express.Router();

router.get("/", getProducts);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deletedProduct);

export default router;
