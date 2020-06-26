const db = require('../models')
const ProductColor = db.productColor
const { QueryTypes } = require('sequelize')
sequelize = db.sequelize

exports.create = async (productColorID, productID) => {
  return ProductColor.create({ ColorID: productColorID, ProductID: productID })
}

exports.findAll = async productColor => {
  return ProductColor.findAll(productColor)
}

exports.findCurrentProductColors = async (productId) => {
  const color = await sequelize.query(
    'Select Color From Colors col ' +
      'Left Join ProductColors pc on col.id = pc.ColorId ' +
      'where ProductId =:ProductId',
    {
      replacements: { ProductId: productId },
      type: QueryTypes.SELECT
    }
  )
  return color
}
