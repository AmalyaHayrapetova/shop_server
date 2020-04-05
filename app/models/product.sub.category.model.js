const db = require(".");
const ProductCategoryTypes = db.productCategory;

module.exports = (sequelize, Sequelize) => {
    const  SubCategory = sequelize.define("ProductSubCategoryTypes", {
    
     SubCategoryName: {
       type: Sequelize.STRING(120),
       allowNull: false,
       unique: true
     },
     CategoryName : {
        type: Sequelize.STRING(120),
        references: ProductCategoryTypes,
        referencesKey: 'CategoryName', 
        allowNull: false,
     },
    });
  
   return SubCategory;
  };
  