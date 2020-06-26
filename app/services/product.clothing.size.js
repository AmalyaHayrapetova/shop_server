const db = require("../models");
const ProductClothingSize = db.productClothingSize;
const { QueryTypes } = require('sequelize')
sequelize = db.sequelize


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

exports.findProductClothingSize = async (productId) => {
  const sizes = await sequelize.query(
    'Select SizeType, AvailableCount From ProductClothingSizes where ProductID =:ProductId',
    {
      replacements: { ProductId: productId },
      type: QueryTypes.SELECT
    }
  )
  return sizes;

}
// exports.findCurrentProductColors = async (productName) => {
//     return Store.findAll(
//         {
//             where: {
//                 ProductName:productName
//         },
//      })
//     }
