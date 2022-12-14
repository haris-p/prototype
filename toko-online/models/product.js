const fs = require('fs');
const path = require('path');



const p = path.join(
    path.dirname(require.main.filename), 
    'data',
    'products.json'
);

const getProductsFromFile = (cb) => {
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            cb([]);
        } else {
            cb(JSON.parse(fileContent));
        }
    });
};

module.exports  = class Product {
    constructor(id, title, imageURL, description, price) {
        this.id = id,
        this.title = title,
        this.imageURL = imageURL,
        this.description = description,
        this.price = price
    }

    save() {
        getProductsFromFile(products => {
            // If the id is already exist, we just need to update it, not creating a new one. 
            // We still need to to get the products
            if (this.id) {
                const existingProductIndex = products.findIndex(prod => prod.id === this.id);
                const updatedProduct = [...products];
                updatedProduct[existingProductIndex] = this;
                fs.writeFile(p, JSON.stringify(updatedProduct), err => {
                    console.log(err);
                });
            } else {
                this.id = Math.random().toString();
                products.push(this);
                fs.writeFile(p, JSON.stringify(products), err => {
                    console.log(err);
                });
            }
        });
    }
    
    static fetchAll(cb) {
        getProductsFromFile(cb);
    }
};