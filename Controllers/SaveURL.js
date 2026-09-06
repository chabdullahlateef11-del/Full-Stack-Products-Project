import Product from "../Models/url.js";
import {nanoid} from "nanoid";

export const createProduct = async (req, res) => {
  try {
    const newProduct = new Product({
      ...req.body,
      id: nanoid()
    });
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
