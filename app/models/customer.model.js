// const bcrypt = require('bcrypt');

module.exports = (sequelize, Sequelize) => {
  const Customer = sequelize.define("Customers", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    Email: {
      type: Sequelize.STRING,
      validate: {
        isEmail: true,
      },
      allowNull: false,
      unique: true,
    },
    Password: {
      type: Sequelize.STRING,
      validate: {
        is: /(?=.*[A-Z])(?=.*[a-z])(?=.{8,})(?=.{8,})/i,
      },
      allowNull: false,
    },
    FirstName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    LastName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    PhoneNumber: {
      type: Sequelize.STRING,
      validate: {
        isNumeric: true,
      },
      allowNull: false,
    },
    // {
    // hooks : {
    //     beforeCreate : (user , options) => {
    //         {
    //             user.password = user.password && user.password != "" ? bcrypt.hashSync(user.password, 10) : "";
    //         }
    //     }
    // }
  });
  return Customer;
};
