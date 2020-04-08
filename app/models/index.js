const dbConfig = require("../config/db.config.js");

const {Sequelize,DataTypes} = require("sequelize");
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
db.DataTypes = DataTypes;

db.customer = require("./customer.model.js")(sequelize, Sequelize,DataTypes);
db.store = require("./store.model.js")(sequelize, Sequelize,DataTypes);
db.shippingAddress = require("./shipping.address.model.js")(sequelize, Sequelize,DataTypes);
db.productCategory = require("./product.category.model")(sequelize,Sequelize,DataTypes);
db.productSubCategory = require("./product.sub.category.model")(sequelize,Sequelize,DataTypes);
db.orderStatus = require("./order.status.model")(sequelize,Sequelize,DataTypes);
db.products = require("./products.model")(sequelize,Sequelize,DataTypes);
db.color = require("./color.model")(sequelize,Sequelize,DataTypes);
db.productColor = require("./product.color.model")(sequelize,Sequelize,DataTypes);
db.productImages = require("./product.images.model")(sequelize,Sequelize,DataTypes);


module.exports = db;