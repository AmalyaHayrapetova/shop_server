const db = require("../models")
const Stores = db.store

module.exports = (sequelize, Sequelize) => {
    const Manager = sequelize.define("StoreManagers", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      Email: {
        type: Sequelize.STRING(120),
        validate: {
          isEmail: true,
        },
        allowNull: false,
        unique: true,
      },
      Password: {
        type: Sequelize.STRING(120),
        validate: {
          is: /(?=.*[A-Z])(?=.*[a-z])(?=.{8,})(?=.{8,})/i,
        },
        allowNull: false,
      },
      FirstName: {
        type: Sequelize.STRING(120),
        allowNull: false,
      },
      LastName: {
        type: Sequelize.STRING(120),
        allowNull: false,
      },
      StoreID: {
        type: Sequelize.INTEGER,
        references: Stores, // <<< Note, its table's name, not object name
        referencesKey: "id",
      },
    });
    return Manager;
  };
  