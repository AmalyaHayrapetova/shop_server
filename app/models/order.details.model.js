const db = require("../models");
const Customer = db.customer;
const Products = db.products;
const Orders = db.orders
module.exports = (sequelize, Sequelize) => {
  const OderDetails = sequelize.define("OrderDetails", {

    id: {
      type: Sequelize.INTEGER,
      primaryKey : true,

    },
    PriceEach: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
    ProductColor: {
      type: Sequelize.STRING(90),
      allowNull: false,
    },
    // ProductMainImage: {
    //   type: Sequelize.STRING(250),
    //   allowNull: false,
    // },
    Quantity: {
      type: Sequelize.INTEGER,
      default: 1,
    },
    ProductSize: {
      type: Sequelize.STRING(90),
      allowNull: false,
    },
    StoreName: {
      type: Sequelize.STRING(90),
      allowNull: false,
    },
    ProductID: {
      type: Sequelize.INTEGER,
      references: Products, // <<< Note, its table's name, not object name
      referencesKey: "id",
    },
    OrderID: {
      type: Sequelize.INTEGER,
      references: Orders, // <<< Note, its table's name, not object name
      referencesKey: "id",

    }

  });
  return OderDetails;
};
