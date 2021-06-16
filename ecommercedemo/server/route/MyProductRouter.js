const { Router } = require('express');
const MyProductController = require('../controller/MyProductController');

let router = new Router();

router.post('/showAll', MyProductController.showAll_post);
router.post('/showSingle', MyProductController.showSingle_post);

module.exports = router;