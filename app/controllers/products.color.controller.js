const services = require("../services/product.color");

//create color
exports.createColor = async (color, product) => {
  const result = await services.create(color, product);
  return result;
};

//get all colors
exports.findProductsColors = async (req, res) => {
  const result = await services.findAll(req.body);
  res.json(result);
};
