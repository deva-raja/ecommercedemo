const Product = require('../models/Product');

const showAll_post = async (req, res) => {
    const reqProduct = req.body;
    try {
        const product = await Product.find({ sellerId: reqProduct.sellerId });
        res.status(201).json({ product });
    } catch (error) {
        const errors = error.message;
        res.status(200).json({ errors });
    }
};

const showSingle_post = async (req, res) => {
    const reqProduct = req.body;
    try {
        const product = await Product.find({ _id: reqProduct.productId });
        res.status(201).json({ product });
    } catch (error) {
        const errors = error.message;
        res.status(200).json({ errors });
    }
};

module.exports = {
    showAll_post,
    showSingle_post,
};
