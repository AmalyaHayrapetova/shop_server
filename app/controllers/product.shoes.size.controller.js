const services = require("../services/product.shoes.size");

//create color
exports.createSize = async (size, product, count) => {
  const result = await services.create(size, product, count);
  return result;
};

// //get all colors
// exports.findProductsColors= async(req, res) => {
//     const result = await services.findAll(req.body)
//     res.json(result)

// }

exports.findAllShoesSizes = async (req, res) => {
  const result = await services.findAll(req.body);
  res.json(result);
};
