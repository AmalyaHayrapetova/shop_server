const services = require("../services/product.images")


//create product category
exports.createProductImages = async(imagePath,productID,productColor) => {
    const result = await services.create(productID,imagePath,productColor)
    return result;
}

//get all categories

// exports.findProductImagesByName = async(req, res) => {
//     const result = await services.findAll(req.body)
//     res.json(result)

// }