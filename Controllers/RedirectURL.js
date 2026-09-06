import Product from "../Models/url.js";

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
export const deletedProduct = async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

    export const updateProduct = async (req, res) => {
        try {
            const updatedProduct = await Product.findOneAndUpdate({ id: req.params.id }, req.body, { new: true });
            res.status(200).json(updatedProduct);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    };