const services = require("../services/product.gender");

//create product gender
exports.createProductGender = async (genderID, productId) => {
  const result = await services.create(genderID, productId);
  return result;
};

exports.findProductGender = async (req, res) => {
  const result = await services.findAll(req.body);
  return res.json(result);
};
