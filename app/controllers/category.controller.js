const services = require("../services/category");

//create product category
exports.createProductCategory = async (req, res) => {
  const result = await services.create(req.body);
  res.json(result);
};

//get all categories

exports.findAllProductCategories = async (req, res) => {
  const result = await services.findAll(req.body);
  res.json(result);
};
