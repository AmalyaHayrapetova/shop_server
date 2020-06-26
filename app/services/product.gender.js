const db = require("../models");
const ProductGender = db.productGender;

exports.create = async (genderID, productId) => {
  return ProductGender.create({
    GenderID: genderID,
    ProductID: productId,
  });
};

exports.findAll = async (gender) => {
  return ProductGender.findAll(gender);
};
