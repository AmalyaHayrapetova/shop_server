const db = require("../models");
const SubCategory = db.subCategory;
const { QueryTypes } = require("sequelize");

exports.create = async (category) => {
  return SubCategory.create(category);
};

exports.findAll = async (category) => {
  return SubCategory.findAll(category);
};

exports.findCategoryName = async (subCategory) => {
  const category = await sequelize.query(
    "SELECT `CategoryName` FROM `SubCategoryTypes` WHERE SubCategoryName =:SubCategory",
    {
      replacements: { SubCategory: subCategory },
      type: QueryTypes.SELECT,
    }
  );
  return category;
};


exports.findSubCategoryByCategory = async(category) =>{
  const subCategory = await sequelize.query(
    "Select `SubCategoryName`, `id`  from `SubCategoryTypes` Where CategoryName=:Category",
      {
      replacements: { Category: category },
      type: QueryTypes.SELECT,
    }
  );
  return subCategory;
}