const Product = require('../models/Product')


 const getAllProducts = async (req, res)=>{
    try {
        const products = await Product.find({})
        res.json(products)
    } catch (err) {
        console.error(err);
        res.status(500).json({message:'Server error'})
    }
}

 const getProductById = async (req, res)=>{
    try {
        const singleProduct = await Product.findById(req.params.id);
        res.json(singleProduct)
    } catch (err) {
        console.error(err);
        res.status(500).json({message:'Server error'})
    }
}

module.exports = {getAllProducts, getProductById}