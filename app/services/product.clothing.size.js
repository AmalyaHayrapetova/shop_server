const db = require("../models");
const ProductClothingSize = db.productClothingSize;
sequelize = db.sequelize;

exports.createClothingSize = async (sizeType, productID, availableCount,color,) => {
  return ProductClothingSize.create({
    SizeType: sizeType,
    ProductID: productID,
    AvailableCount: availableCount,
    Colors:color,

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
