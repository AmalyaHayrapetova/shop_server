const db = require("../models");
const ProductCategory = db.productCategory;

exports.create = async (category) => {
  return ProductCategory.create(category);
};

exports.findAll = async (category) => {
  return ProductCategory.findAll(category);
};
