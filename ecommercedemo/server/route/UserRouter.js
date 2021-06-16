const { Router } = require('express');
const userController = require('../controller/UserController');

let router = new Router();

router.post('/create', userController.create_post);
router.post('/login', userController.login_post);

module.exports = router;
