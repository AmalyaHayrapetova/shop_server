const services = require("../services/sub.category");

//create product sub category
exports.createProductSubCategory = async (req, res) => {
  const result = await services.create(req.body);
  res.json(result);
};

//get all categories
exports.findAllProductSubCategories = async (req, res) => {
  const result = await services.findAll(req.body);
  res.json(result);
};

module.exports.findCategoryBySubCategory = async (subCategoryName) => {
  const result = await services.findCategoryName(subCategoryName);
  return result;
};

module.exports.findSubCategories = async(req,res) =>{
  const result = await services.findSubCategoryByCategory(req.params.id);
  res.json(result);
}