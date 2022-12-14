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


exports.getCart = (req, res, next) => {
    req.user.getCart()
    .then(cart => {
      return cart.getProducts()
      .then(products => {      
        res.render('shop/cart.ejs', {
          path: '/cart',
          pageTitle: 'Your Cart',
          products: products
        });
      })
      .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
};

exports.postCart = (req, res, next) => {
    // Retrieve the product ID from the incoming request
    const prodId = req.body.productId;
    let fetchedCart;
    let newQuantity = 1;
    req.user.getCart()
    .then(cart => {
        fetchedCart = cart;
        return cart.getProducts({where: {id: prodId}});
    })
    .then(products => {
        let product;
        if (products.length > 0) {
        product = products[0];
        }
        if (product) {
        const oldQuantity = product.cartItem.quantity;
        newQuantity = oldQuantity + 1;
        return product;
        }
        return Product.findByPk(prodId); 
    })
    .then(product => {
        return fetchedCart.addProduct(product, {
        through: {quantity: newQuantity}
        });
    })
    .then(() => {
        res.redirect('/cart');
    })
    .catch(err => {
        console.log(err);
    });
};

exports.getAboutUs = (req, res, next) => {
    Product.findAll()
    .then(product => {
        res.render('shop/about.ejs', {
            product: product,
            pageTitle: "About Us",
            path: '/about-us'
        });
    });
}

exports.getSignIn = (req,res, next) => {
    Product.findAll()
    .then(product => {
        res.render('shop/sign-in.ejs', {
            product: product,
            pageTitle: "Sign In",
            path: '/sign-in'
        });
    });
}

exports.getSignUp = (req, res, next) => {
    Product.findAll()
    .then(product => {
        res.render('shop/sign-up', {
            product: product,
            pageTitle: 'Sign Up',
            path: '/sign-up'
        });
    });
}