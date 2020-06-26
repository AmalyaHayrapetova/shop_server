const db = require("../models");

const ProductImages = db.productImages;
// const Products = db.products;

// const { QueryTypes } = require('sequelize');
// sequelize = db.sequelize

exports.create = async (imagePath, productId, color) => {
  return ProductImages.create({
    ImagePath: imagePath,
    ProductID: productId,
    ProductColor: color,
  });
};

// exports.findAll = async (imagePath) =>{
//     return ProductImages.findAll(imagePath);
// }

// exports.findCurrentProductImages = async (productName) => {

//     return ProductImages.findAll(
//         {
//             where: {
//                 ProductID: productName
//         },
//      });
// }
