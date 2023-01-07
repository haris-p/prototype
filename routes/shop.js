const fs = require('fs');

const express = require('express');

const shopController = require('../controllers/shop');

const router = express.Router();

// ORDER MATTER
router.get('/', shopController.getIndex);
router.get('/products', shopController.getProductsList);
router.get('/product-detail/:productId', shopController.getProductDetail);
router.get('/about-us', shopController.getAboutUs);

module.exports = router;