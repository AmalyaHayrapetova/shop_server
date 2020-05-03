const db = require("../models");
const Products = db.products;

module.exports = (sequelize, Sequelize) => {
  const ProductImages = sequelize.define("ProductImages", {
    ImagePath: {
      type: Sequelize.STRING(120),
      primaryKey: true,
    },
    ProductColor: {
      type: Sequelize.STRING(90),
      primaryKey: true,
    },
    ProductID: {
      type: Sequelize.INTEGER,
      references: Products, // <<< Note, its table's name, not object name
      referencesKey: "id",
    },
  });
  return ProductImages;
};
