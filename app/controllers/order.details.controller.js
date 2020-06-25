const services = require("../services/order.details");

exports.createOrderDetail = async(req, res) => {

    const result = await services.create(req.body)
    res.json(result)
}
