const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    res.render('admin/edit-product', {
        pageTitle: 'Add Product', 
        path: '/admin/add-product',
        editing: false
    });
}
  
exports.postAddProduct = (req, res, next) => {
    const productName = req.body.productName;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    const collection = req.body.collection;
    const productType = req.body.productType
    // Sequelize object (ASSOCIATIONS - Associated object)
    req.user.createProduct({
        productName: productName,
        imageUrl: imageUrl,
        price: price,
        description: description,
        collection: collection,
        productType: productType,
        userId: req.user.id
    })
    .then(result => {
        res.redirect('/');
    })
    .catch(err => console.log(err));
  };
  