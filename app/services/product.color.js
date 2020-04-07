const db = require("../models");
const ProductColor = db.productColor
const { QueryTypes } = require('sequelize');
sequelize = db.sequelize

exports.create = async (productColorID, productID) =>{

    return ProductColor.create({"ColorID" :productColorID,"ProductID":productID });
}


exports.findAll = async (productColor) =>{
    return ProductColor.findAll(productColor);
}

exports.findCurrentProductColors = async (productName) => {
    return Store.findAll(
        { 
            where: { 
                ProductName:productName
        },
     });
}