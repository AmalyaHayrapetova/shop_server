
module.exports = (sequelize, Sequelize) => {
     const Customer = sequelize.define("Customers", {
      // CustomerID: {
      //   type: Sequelize.INTEGER,
      //   primaryKey: true,
      //   autoIncrement: true
      // },
      Email: {
        type: Sequelize.STRING,
        validate:{
          isEmail: true,
        },
        allowNull: false,
        unique: true
      },
      Password: {
        type: Sequelize.STRING,
        validate:{
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
        validate:{
          isNumeric: true
        },
        allowNull: false,
      }

      });
    return Customer;
  };
  