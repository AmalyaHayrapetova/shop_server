
module.exports = (sequelize, Sequelize) => {
    const Store = sequelize.define("Stores", {
      StoreName: {
        type: Sequelize.STRING(80),
        unique: true,
        allowNull: false,
      },
      StoreLogoPath: {
        type: Sequelize.STRING(120),
        allowNull: false,
      },
      Description: {
        type: Sequelize.STRING(200),
        allowNull: false,
      },
      Country: {
        type: Sequelize.STRING(80),
        allowNull: false,
      },
      City: {
        type: Sequelize.STRING(120),
        allowNull: false,
      },
      Street: {
        type: Sequelize.STRING(80),
        allowNull: false,

      },
      PhoneNumber: {
        type: Sequelize.STRING(120),
        allowNull: false,
      } 
    });
   
    return Store;
  };
  