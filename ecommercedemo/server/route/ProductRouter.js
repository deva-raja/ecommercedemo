const { Router } = require('express');
const ProductController = require('../controller/ProductController');

let router = new Router();

router.post('/showAll', ProductController.showAll_post);
router.post('/showSingle', ProductController.showSingle_post);
router.post('/showCart', ProductController.showCartProduct_post);
router.post('/create', ProductController.createProduct_post);
router.post('/delete', ProductController.deleteProduct_post);

module.exports = router;
