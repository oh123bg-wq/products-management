const Product = require('../models/Product')

exports.getAllProducts = async (req, res) => {
    const products = await Product.find({})
    res.json(products)
}

exports.getProductById = async (req, res) => {
    const product = await Product.findOne({ _id: req.params.id })
    res.json(product)
}

exports.addNewProduct = async (req, res) => {
    const newProduct = new Product(req.body)
    await newProduct.save()
    res.json(newProduct)
}

exports.editProduct = async (req, res) => {                                      // Add this so press the send button 1 time than can 
    try {                                                                              // show the updated data, dont need press 2 times
        const updatedProduct = await Product.findOneAndUpdate(req.params.id, req.body,{ new: true });
        res.json(updatedProduct);
    } catch (err) {
        res.status(500).json(err);
    }
};