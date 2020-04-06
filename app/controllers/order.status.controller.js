const services = require("../services/order.status")


//create status
exports.createOrderStatus = async(req,res) => {
    const result = await services.create(req.body)
    res.json(result)
}

//get all statuses

exports.findAllOrderStatuses= async(req, res) => {
    const result = await services.findAll(req.body)
    res.json(result)

}