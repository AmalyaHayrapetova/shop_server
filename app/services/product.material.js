const db = require("../models");
const ProductMaterials = db.productMaterials;
const { QueryTypes } = require('sequelize')
sequelize = db.sequelize

exports.create = async (materialType, productID) => {
  return ProductMaterials.create({
    MaterialType: materialType,
    ProductID: productID,
  });
};

exports.findAll = async (materialType) => {
  return ProductMaterials.findAll(materialType);
};


exports.findDetailByProductId = async(productId) => {
    const details = await sequelize.query(
    'Select MaterialType From ProductMaterials where ProductID =:ProductId',
    {
      replacements: { ProductId: productId },
      type: QueryTypes.SELECT
    }
  )
  return details

}