const mongoose = require('mongoose');

const SellerSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    lowercase: true,
    unique: true,
  },
  info: {
    type: String,
    required: [true, 'info is required'],
    minlength: [2, 'Should be atleast 2 characters'],
  },
  img: {
    type: String,
    required: [true, 'image is required'],
  },
});

const Seller = mongoose.model('Seller', SellerSchema);

module.exports = Seller;
