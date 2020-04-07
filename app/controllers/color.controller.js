const services = require("../services/color")


//create color
exports.createColor = async(req,res) => {
    const result = await services.create(req.body)
    res.json(result)
}

//get all colors
exports.findAllAvailableColors= async(req, res) => {
    const result = await services.findAll(req.body)
    res.json(result)

}