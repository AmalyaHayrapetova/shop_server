const db = require('.')
const Stores = db.store
const SubCategory = db.SubCategory

module.exports = (sequelize, Sequelize) => {
  const Products = sequelize.define('Products', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },

    ProductName: {
      type: Sequelize.STRING(250),
      unique: true
    },
    Description: {
      type: Sequelize.STRING(250)
    },
    Price: {
      type: Sequelize.FLOAT,
      allowNull: false
    },
    isAvailable: {
      type: Sequelize.STRING(10),
      allowNull: false
    },
    Quantity: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    BrandName: {
      type: Sequelize.STRING(120),
      allowNull: false
    },
    Discount: {
      type: Sequelize.FLOAT
    },
    MainImage: {
      type: Sequelize.STRING(400),
      allowNull: false
    },
    StoreID: {
      type: Sequelize.INTEGER,
      references: Stores, // <<< Note, its table's name, not object name
      referencesKey: 'id'
    },
    SubCategoryName: {
      type: Sequelize.STRING(90),
      references: SubCategory,
      referencesKey: 'SubCategoryName'
    }
  })

  return Products
}
