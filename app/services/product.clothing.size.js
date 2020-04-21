const db = require("../models");
const ProductClothingSize = db.productClothingSize;
sequelize = db.sequelize;

exports.create = async (sizeType, productID, availableCount) => {
  return ProductClothingSize.create({
    SizeType: sizeType,
    ProductID: productID,
    AvailableCount: availableCount,
  });
};

exports.findAll = async (productSize) => {
  return ProductClothingSize.findAll(productSize);
};

// exports.findCurrentProductColors = async (productName) => {
//     return Store.findAll(
//         {
//             where: {
//                 ProductName:productName
//         },
//      })
//     }
