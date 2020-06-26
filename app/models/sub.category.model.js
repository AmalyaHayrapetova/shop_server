const db = require("../models");
const CategoryTypes = db.category;

module.exports = (sequelize, Sequelize) => {
  const SubCategory = sequelize.define("SubCategoryTypes", {
    SubCategoryName: {
      type: Sequelize.STRING(120),
      allowNull: false,
      unique: true,
    },
    CategoryName: {
      type: Sequelize.STRING(120),
      references: CategoryTypes,
      referencesKey: "CategoryName",
      allowNull: false,
    },
  });

  return SubCategory;
};
