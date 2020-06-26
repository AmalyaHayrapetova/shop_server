const db = require("../models");
const Gender = db.color;
const Products = db.products;

module.exports = (sequelize, Sequelize) => {
  const ProductGenderType = sequelize.define("ProductGenderTypes", {
    GenderID: {
      type: Sequelize.INTEGER,
      references: Gender,
      referencesKey: "id",
      allowNull: false,
      primaryKey: true,
    },
    ProductID: {
      type: Sequelize.INTEGER,
      references: Products,
      referencesKey: "id",
      allowNull: false,
      primaryKey: true,
    },
  });
  return ProductGenderType;
};
