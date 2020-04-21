const db = require("../models");
const Customer = db.customer;
module.exports = (sequelize, Sequelize) => {
  const ShippingAddress = sequelize.define("ShippingAddresses", {
    Country: {
      type: Sequelize.STRING(120),
      primaryKey: true,
    },
    City: {
      type: Sequelize.STRING(120),
      primaryKey: true,
    },
    Street: {
      type: Sequelize.STRING(120),
      primaryKey: true,
    },
    Flat: {
      type: Sequelize.STRING(80),
      primaryKey: true,
    },
    District: {
      type: Sequelize.STRING(120),
      primaryKey: true,
    },
    ZipCode: {
      type: Sequelize.STRING(80),
    },
    PhoneNumber: {
      type: Sequelize.STRING(120),
      validate: {
        isNumeric: true,
      },
      primaryKey: true,
    },
    id: {
      type: Sequelize.INTEGER,
      references: Customer,
      referencesKey: "id",
      allowNull: false,
      primaryKey: true,
    },
  });

  return ShippingAddress;
};
