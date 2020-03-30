
module.exports = (sequelize, Sequelize) => {
    const Store = sequelize.define("Store", {
      StoreName: {
        type: Sequelize.STRING(80),
        primaryKey: true,
      },
      StoreLogoPath: {
        type: Sequelize.STRING(120),
      },
      Description: {
        type: Sequelize.STRING(120),
      },
      Country: {
        type: Sequelize.STRING(80),
        primaryKey: true,
      },
      City: {
        type: Sequelize.STRING(120),
        primaryKey: true,

      },
      Street: {
        type: Sequelize.STRING(80),
        primaryKey: true,

      },
      PhoneNumber: {
        type: Sequelize.STRING(120),
      } 

      });
   
    return Store;
  };
  