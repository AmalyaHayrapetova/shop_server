const db = require("../models");
const Products = db.products;

module.exports = (sequelize, Sequelize) => {
  const ProductMaterial = sequelize.define("ProductMaterials", {
    MaterialType: {
      type: Sequelize.STRING(90),
      primaryKey: true,
    },
    ProductID: {
      type: Sequelize.INTEGER,
      references: Products, // <<< Note, its table's name, not object name
      referencesKey: "id",
      primaryKey: true,
    },
  });
  return ProductMaterial;
};
