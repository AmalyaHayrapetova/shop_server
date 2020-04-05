const db = require("../models");
const ProductSubCategory = db.productSubCategory


exports.create = async (category) =>{
    return ProductSubCategory.create(category);
}


exports.findAll = async (category) =>{
    return ProductSubCategory.findAll(category);
}