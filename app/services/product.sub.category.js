const db = require("../models");
const ProductSubCategory = db.productSubCategory;
const { QueryTypes } = require("sequelize");

exports.create = async (category) => {
  return ProductSubCategory.create(category);
};

exports.findAll = async (category) => {
  return ProductSubCategory.findAll(category);
};

exports.findCategoryName = async (subCategory) => {
  const category = await sequelize.query(
    "SELECT `CategoryName` FROM `ProductSubCategoryTypes` WHERE SubCategoryName =:SubCategory",
    {
      replacements: { SubCategory: subCategory },
      type: QueryTypes.SELECT,
    }
  );
  return category;
};
