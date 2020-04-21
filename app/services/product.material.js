const db = require("../models");
const ProductMaterials = db.productMaterials;

exports.create = async (materialType, productID) => {
  return ProductMaterials.create({
    MaterialType: materialType,
    ProductID: productID,
  });
};

exports.findAll = async (materialType) => {
  return ProductMaterials.findAll(materialType);
};
