const productModel = require("../models/productModel")


module.exports.createProduct = async (req, res)=>{
    const product = req.body
    const createdProduct = await productModel.create(product)
    console.log(req.body);
    res.send({
        msg:"created product !",
        product:createdProduct
    })
}