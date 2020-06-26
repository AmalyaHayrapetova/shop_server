const services = require("../services/product.clothing.size");

//create product clothing size
exports.createSize = async (size, product, count,color,) => {
  const result = await services.createClothingSize(size, product,count, color);
  return result;
};

// //get all colors
// exports.findProductsColors= async(req, res) => {
//     const result = await services.findAll(req.body)
//     res.json(result)

// }

exports.findAllClothingsSizes = async (req, res) => {
  const result = await services.findAll(req.body);
  return res.json(result);
};

exports.findProductSizeById = async(req, res) => {
  const result = await services.findProductClothingSize(req.query.id);
  return res.json(result);
}