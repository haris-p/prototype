const Product = require('../models/product');

// Create a logic to get index and export it
exports.getIndex = (req, res, next) => {
    // use fetchAll static method to fetch the data from Product class isntance
    Product.findAll()
    .then(products => {
        res.render('shop/index.ejs', {
            prods: products,
            pageTitle: 'Shop',
            path: '/'
        });
    })
    .catch(err => console.log(err));
};

exports.getProductsList = (req, res, next) => {
    Product.findAll()
    .then(products => {
        res.render('shop/products-list.ejs', {
            prods: products,
            pageTitle: 'Products List',
            path: '/products'
        });
        console.log(products.price);
    })
    .catch(err => console.log(err));
};

exports.getProductDetail = (req, res, next) => {
    const prodId = req.params.productId;
    Product.findByPk(prodId)
    .then (product => {
        res.render('shop/product-detail.ejs', {
            product: product,
            pageTitle: product.title,
            path: '/product-detail'
        });
        console.log(product);
    })
    .catch(err => {
        console.log(err);
    });
};

exports.getCart = (req, res, next) => {
    Product.findAll()
    .then( product => {
        res.render('shop/cart.ejs', {
            product: product,
            pageTitle: "Cart",
            path: '/cart'
        });
    })
}