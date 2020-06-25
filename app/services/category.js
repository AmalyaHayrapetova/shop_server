const db = require("../models");
const Category = db.category;

exports.create = async (category) => {
  return Category.create(category);
};

exports.findAll = async (category) => {
  return Category.findAll(category);
};
