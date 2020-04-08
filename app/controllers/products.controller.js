const services = require("../services/products")


// Create a new product_color 
exports.addProductWithColor = async (req, res) => {
    const result = await services.create(req.body);    
    console.log("The result is: ", result);
    res.json(result);
}


//find all products
exports.findAll = async(req, res) => {
    const result = await services.findAll(req.body)
    res.json(result)
}


exports.findProductIDByName = async( req) => {
    const result = await services.findProductID(req);
    return result[0].id;

}