const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Email is required'],
  },
  price: {
    type: String,
    required: [true, 'price is required'],
  },
  img: {
    type: String,
    required: [true, 'Image is required'],
  },
  sellerId: {
    type: String,
    required: [true, 'sellerId is required'],
  },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
