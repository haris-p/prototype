const fs = require('fs');

const express = require('express');

const shopController = require('../controllers/shop');

const router = express.Router();

// ORDER MATTER
router.get('/', shopController.getIndex);

module.exports = router;