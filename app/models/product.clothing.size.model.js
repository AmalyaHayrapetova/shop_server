const db = require(".");
const Products = db.products;
const Size = db.clothingSize;

module.exports = (sequelize, Sequelize) => {
  const ClothingSize = sequelize.define("ProductClothingSizes", {
    SizeType: {
      type: Sequelize.STRING(90),
      references: Size,
      referencesKey: "SizeType",
      primaryKey: true,
    },
    ProductID: {
      type: Sequelize.INTEGER,
      references: Products,
      referencesKey: "id",
      primaryKey: true,
    },
    AvailableCount: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    Colors:{
      type: Sequelize.STRING(90),
      primaryKey: true,
    }
  });

  return ClothingSize;
};
