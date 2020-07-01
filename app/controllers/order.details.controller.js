const services = require('../services/order.details')

exports.createOrderDetail = async (req, res) => {
  const result = await services.create(req.body)
  res.json(result)
}

exports.findCustomerAllOrderDetailsByOrderNumber = async (req, res) => {
  const result = await services.findInfo(req.query.id)
  res.json(result)
}
