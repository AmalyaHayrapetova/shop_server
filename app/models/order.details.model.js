const db = require('../models')
const Customer = db.customer
const Products = db.products
const Orders = db.orders

module.exports = (sequelize, Sequelize) => {
  const OderDetails = sequelize.define('OrderDetails', {
    OrderDetailsId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },

    OrderNumber: {
      type: Sequelize.INTEGER,
      references: Orders, // <<< Note, its table's name, not object name
      referencesKey: 'id'
    },
    ProductID: {
      type: Sequelize.INTEGER,
      references: Products, // <<< Note, its table's name, not object name
      referencesKey: 'id'
    },
    ProductColor: {
      type: Sequelize.STRING(90),
      allowNull: true
    },
    ProductSize: {
      type: Sequelize.STRING(90),
      allowNull: true,
      defaultValue:"No Size"
    },
    Quantity: {
      type: Sequelize.INTEGER,
      default: 1
    },

    Price: {
      type: Sequelize.FLOAT,
      allowNull: false
    },
    StoreName: {
      type: Sequelize.STRING(90),
      allowNull: false
    }
  })
  return OderDetails
}
