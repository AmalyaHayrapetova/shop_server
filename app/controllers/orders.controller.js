const services = require('../services/orders')

exports.createNewOrder = async (req, res) => {
  const result = await services.createOrder(req.body)
  res.send(result)
}

exports.findCustomerOrders = async (req, res) => {
  const result = await services.findCustomerOrder(req.params.id)
  res.send(result)
}

exports.updateOrderStatus = async (req, res) => {
  const result = await services.updateOrderStatus(req.body)
  res.send(result)
}

exports.findCustomerOrderStatus = async (req, res) => {
  const result = await services.findCustomerOrderStatus(
    req.query.orderID,
    req.query.userID
  )
  res.send(result)
}

exports.findCustomerOrderNumbers = async (req, res) => {
  const result = await services.findCustomerOrderNum(req)
  return result;
}
