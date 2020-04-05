const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  },
  define: {
    timestamps: false
}

});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.customer = require("./customer.model.js")(sequelize, Sequelize);
db.store = require("./store.model.js")(sequelize, Sequelize);
db.shippingAddress = require("./shipping.address.model.js")(sequelize, Sequelize);
db.productCategory = require("./product.category.model")(sequelize,Sequelize);

module.exports = db;