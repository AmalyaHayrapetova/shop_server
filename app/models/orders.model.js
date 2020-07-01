const db = require('../models')
const Customer = db.customer
const Status = db.orderStatus

module.exports = (sequelize, Sequelize, DataTypes) => {
  const Orders = sequelize.define('Orders', {
    OrderNumber: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    OrderDate: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    ShippedDate: {
      type: DataTypes.DATE
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
      referencesKey: 'id',
      allowNull: false
    },
    OrderStatusName: {
      type: Sequelize.STRING(70),
      references: Status,
      referencesKey: 'StatusName',
      defaultValue: 'In Progress',
      allowNull: false
    }
  })
  return Orders
}
