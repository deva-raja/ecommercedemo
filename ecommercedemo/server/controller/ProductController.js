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

const showCartProduct_post = async (req, res) => {
   const ids = req.body.ids;
   try {
      const product = await Product.find({ _id: { $in: ids } });
      res.status(201).json({ product });
   } catch (error) {
      const errors = error.message;
      res.status(200).json({ errors });
   }
};

const createProduct_post = async (req, res) => {
   console.log(req.body);
   try {
      const product = await Product.create(req.body);
      res.status(201).json({ product });
   } catch (error) {
      const errors = error.message;
      res.status(200).json({ errors });
   }
};

const deleteProduct_post = async (req, res) => {
  console.log(req.body);
   try {
      const product = await Product.deleteOne({ _id: req.body.productId });
      res.status(201).json({ product });
   } catch (error) {
      const errors = error.message;
      res.status(200).json({ errors });
   }
};

module.exports = {
   showAll_post,
   showSingle_post,
   showCartProduct_post,
   createProduct_post,
   deleteProduct_post,
};
