const db = require("../models");
const Customer = db.customer;
const Status = db.orderStatus;

module.exports = (sequelize, Sequelize) => {
  const Orders = sequelize.define("Orders", {

    OrderID: {
      type: Sequelize.INTEGER,
      primaryKey : true,
      autoIncrement: true,

    },
    Quantity: {
      type: Sequelize.INTEGER,
      allowNull: false,
      default: 1,
    },

    TotalPrice: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
    ProductMainImage: {
      type: Sequelize.STRING(250),
      allowNull: false,
    },
    Discount: {
      type: Sequelize.FLOAT,
      allowNull: true,
    },
    ShippingAmmount: {
      type: Sequelize.STRING(90),
      allowNull: false,
    },
    OrderDate :{
      type: Sequelize.DATE,
      allowNull: false,

    },
    ShippedDate : {
      type: Sequelize.DATE,
      // allowNull: false,
    },

    Country: {
      type: Sequelize.STRING(120),
    },
    City: {
      type: Sequelize.STRING(120),
    },
    Street: {
      type: Sequelize.STRING(120),
    },
    Flat: {
      type: Sequelize.STRING(80),
    },
    District: {
      type: Sequelize.STRING(120),
    },
    ZipCode: {
      type: Sequelize.STRING(80),
    },
    PhoneNumber: {
      type: Sequelize.STRING(120),
      validate: {
        isNumeric: true,
      },
    },
    TrackingNumber: {
      type: Sequelize.STRING(80),
      allowNull: false,

    },
    CustomerID: {
      type: Sequelize.INTEGER,
      references: Customer, // <<< Note, its table's name, not object name
      referencesKey: "id",
    },
    OrderStatusName: {
      type: Sequelize.String,
      references: Status,
      referencesKey: "StatusName",
    }
  });
  return Orders;
};
