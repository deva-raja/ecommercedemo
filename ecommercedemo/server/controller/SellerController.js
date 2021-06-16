const Seller = require('../models/Seller');

const show_get = async (req, res) => {
  try {
    const seller = await Seller.find();
    res.status(201).json({ seller });
  } catch (error) {
    const errors = error.message;
    res.status(200).json({ errors });
  }
};

module.exports = {
  show_get,
};
