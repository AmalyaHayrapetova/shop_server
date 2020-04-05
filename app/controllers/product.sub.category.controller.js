const services = require("../services/product.sub.category")


//create product sub category
exports.createProductSubCategory = async(req,res) => {
    const result = await services.create(req.body)
    res.json(result)
}

//get all categories
exports.findAllProductSubCategories = async(req, res) => {
    const result = await services.findAll(req.body)
    res.json(result)

}