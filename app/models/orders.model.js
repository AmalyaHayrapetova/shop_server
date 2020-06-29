const db = require('../models')
const Customer = db.customer
const Status = db.orderStatus

module.exports = (sequelize, Sequelize) => {
  const Orders = sequelize.define('Orders', {
    OrderID: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    OrderDate: {
      type: Sequelize.DATE,
      allowNull: false
    },
    ShippedDate: {
      type: Sequelize.DATE
      // allowNull: false,
    },

    Country: {
      type: Sequelize.STRING(120)
    },
    City: {
      type: Sequelize.STRING(120)
    },
    District: {
      type: Sequelize.STRING(120)
    },
    Street: {
      type: Sequelize.STRING(120)
    },
    Flat: {
      type: Sequelize.STRING(80)
    },
    ZipCode: {
      type: Sequelize.STRING(80)
    },
    PhoneNumber: {
      type: Sequelize.STRING(120),
      validate: {
        isNumeric: true
      }
    },
    CustomerID: {
      type: Sequelize.INTEGER,
      references: Customer, // <<< Note, its table's name, not object name
      referencesKey: 'id'
    },
    OrderStatusName: {
      type: Sequelize.String,
      references: Status,
      referencesKey: 'StatusName',
      default: "In Progress"
    }
  })
  return Orders
}
