const db = require(".");
const Products = db.products;
const ShoesSize = db.shoesSize;

module.exports = (sequelize, Sequelize) => {
  const ClothingSize = sequelize.define("ProductShoesSizes", {
    SizeType: {
      type: Sequelize.STRING(90),
      references: ShoesSize,
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
