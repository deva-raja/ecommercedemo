const { Router } = require('express');
const SellerController = require('../controller/SellerController');

let router = new Router();

router.get('/show', SellerController.show_get);
//router.post('/create', userController.create_post);
//router.post('/login', userController.login_post);
module.exports = router;
