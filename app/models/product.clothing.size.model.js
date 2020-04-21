const db = require(".");
const Products = db.products;
const Size = db.clothingSize;

module.exports = (sequelize, Sequelize) => {
  const ClothingSize = sequelize.define("ProductClothingSizes", {
    SizeType: {
      type: Sequelize.STRING(90),
      references: Size,
      referencesKey: "SizeType",
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
    AvailableCount: {
      type: Sequelize.STRING(30),
      allowNull: false,
    },
  });

  return ClothingSize;
};
