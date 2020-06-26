const services = require("../services/product.material");

exports.createProductByCredentials = async (materialType, productID) => {
  return await services.create(materialType, productID);
};

exports.findAllMaterials = async (req, res) => {
  const result = await services.findAll(req.body);
  res.json(result);
};

exports.findProductDetails = async(req, res) => {
  const result = await services.findDetailByProductId(req.query.id);
  res.json(result);

}