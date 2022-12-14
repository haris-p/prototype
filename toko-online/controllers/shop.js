const Product = require('../models/product');

// Create a logic to get index and export it
exports.getIndex = (req, res, next) => {
    // use fetchAll static method to fetch the data from Product class isntance
    Product.fetchAll(products => {
        res.render('../views/shop/index.ejs', {
            prods: products,
            pageTitle: 'Shop',
            path: '/'
        });
    });
};