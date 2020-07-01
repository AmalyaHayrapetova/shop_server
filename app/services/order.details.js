const db = require('../models')
const OrderDetails = db.orderDetails
const Store = require('../controllers/store.controller')
const { QueryTypes } = require('sequelize')
sequelize = db.sequelize
const Products = require('../controllers/products.controller')
const Orders = require('../controllers/orders.controller')

//total price from customer ID

exports.create = async items => {
  items['ProductID'] = await Products.findProductIdWithName(items.ProductName)
  return OrderDetails.create(items)
}

exports.findInfo = async customerId => {
  var finalData = {}
  var oderNumbers = await Orders.findCustomerOrderNumbers(customerId)
  console.log('nu ', oderNumbers)
  for (var num in oderNumbers) {
    var x = await getDetailsByOrderNumber(oderNumbers[num].OrderNumber)
    finalData[oderNumbers[num].OrderNumber] = x
  }
  return finalData
}

const getDetailsByOrderNumber = async orderNumber => {
  const orderNum = await sequelize.query(
    // 'SELECT OrderNumber,OrderDate,OrderStatusName,ProductColor,ProductSize,Quantity,Price,StoreName' +
    // '  from Orders o  Inner Join OrderDetails det on o.OrderNumber = det.OrderNumber',
    'SELECT * from OrderDetails o where o.OrderNumber=:OrderNumber',
    {
      replacements: {
        OrderNumber: orderNumber
      },
      type: QueryTypes.SELECT
    }
  )
  return orderNum
}

