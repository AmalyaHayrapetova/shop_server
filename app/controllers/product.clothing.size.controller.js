const services = require("../services/product.clothing.size");

//create product clothing size
exports.createSize = async (size, product, count) => {
  const result = await services.create(size, product, count);
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
