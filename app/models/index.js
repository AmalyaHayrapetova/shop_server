const dbConfig = require('../config/db.config.js')

const { Sequelize, DataTypes } = require('sequelize')
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
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize
db.DataTypes = DataTypes

db.customer = require('./customer.model.js')(sequelize, Sequelize, DataTypes)
db.store = require('./store.model.js')(sequelize, Sequelize, DataTypes)
db.shippingAddress = require('./shipping.address.model.js')(
  sequelize,
  Sequelize,
  DataTypes
)
db.category = require('./category.model')(sequelize, Sequelize, DataTypes)
db.subCategory = require('./sub.category.model')(
  sequelize,
  Sequelize,
  DataTypes
)
db.orderStatus = require('./order.status.model')(
  sequelize,
  Sequelize,
  DataTypes
)
db.products = require('./products.model')(sequelize, Sequelize, DataTypes)
db.color = require('./color.model')(sequelize, Sequelize, DataTypes)
db.productColor = require('./product.color.model')(
  sequelize,
  Sequelize,
  DataTypes
)
db.productImages = require('./product.images.model')(
  sequelize,
  Sequelize,
  DataTypes
)
db.productMaterials = require('./product.material.model')(
  sequelize,
  Sequelize,
  DataTypes
)
db.productGender = require('./product.gender.model')(
  sequelize,
  Sequelize,
  DataTypes
)
db.clothingSize = require('./clothing.size.model')(
  sequelize,
  Sequelize,
  DataTypes
)
db.productClothingSize = require('./product.clothing.size.model')(
  sequelize,
  Sequelize,
  DataTypes
)
db.shoesSize = require('./shoes.size.model')(sequelize, Sequelize, DataTypes)
db.productShoesSize = require('./product.shoes.size.model')(
  sequelize,
  Sequelize,
  DataTypes
)
db.gender = require('./gender.model')(sequelize, Sequelize, DataTypes)
db.storeManager = require('./store.manager.model')(
  sequelize,
  Sequelize,
  DataTypes
)
db.orderDetails = require('./order.details.model')(
  sequelize,
  Sequelize,
  DataTypes
)

db.orders = require('./orders.model')(sequelize, Sequelize, DataTypes)
module.exports = db
