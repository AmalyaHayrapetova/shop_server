
const db = require(".");
const Stores = db.store;
const ProductSubCategory = db.productSubCategory

module.exports = (sequelize, DataTypes) => {
  const  Products = sequelize.define("Products", {
      ProductName: {
        type: DataTypes.STRING(250),
        allowNull: false,
      },
      Description: {
        type: DataTypes.STRING(250),
      },
      Price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      isAvailable: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      Quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,  
      },
      BrandName: {
        type: DataTypes.STRING(120),
        allowNull: false,  
      },
      Discount:{
        type: DataTypes.FLOAT
      },
      StoreID: {
        type: DataTypes.INTEGER,
        references: Stores, // <<< Note, its table's name, not object name
        referencesKey: 'id'

      },
      ProductSubCategoryName: {
        type: DataTypes.STRING(90),
        references: ProductSubCategory, // <<< Note, its table's name, not object name
        referencesKey: 'SubCategoryName'

      }

      

      });
   
    return Products;
  };
  






 


