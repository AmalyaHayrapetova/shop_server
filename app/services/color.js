const db = require("../models");
const ProductColor = db.productColor


exports.create = async (productColor) =>{
    return ProductColor.create(productColor);
}


exports.findAll = async (productColor) =>{
    return ProductColor.findAll(productColor);
}
