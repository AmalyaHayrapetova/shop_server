const services = require("../services/product.images");

//create product category
exports.createProductImages = async (imagePath, productId, color) => {
  const result = await services.create(imagePath, productId, color);
  return result;
};

//get all categories

// exports.findProductImagesByName = async(req, res) => {
//     const result = await services.findAll(req.body)
//     res.json(result)

// }
