const db = require("../models");
const ProductShoesSize = db.productShoesSize;
sequelize = db.sequelize;

exports.create = async (sizeType, productID, availableCount) => {
  return ProductShoesSize.create({
    SizeType: sizeType,
    ProductID: productID,
    AvailableCount: availableCount,
  });
};

exports.findAll = async (productSize) => {
  return ProductShoesSize.findAll(productSize);
};
