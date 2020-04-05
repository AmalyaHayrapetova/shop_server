const services = require("../services/shipping.address")
const customerUtils = require("../utils/customer.utils")


// Create a new Shipping Address
exports.createNewShippingAddress = async (req, res) => {
    // var phoneNumber
    // if (!req.body.hasOwnProperty("PhoneNumber")) {
    //     console.log("req body ", req.body["id"])
    //     phoneNumber = customerUtils.findCustomerInfoById(req.body["id"])
    //     console.log("PhoneNumber is",phoneNumber);
    //     req.body["PhoneNumber"] = phoneNumber
    //  }

    const result = await services.create(req.body);    
    res.json(result);
     
};

exports.getUserShippingAddresses = async (req, res) => {
    var id = req.params.id
    const result = await services.findUserShippingAddresses(id)
    res.json(result);
}

exports.removeShippingAddress = async(req,res) => {
    const result = await services.destroy(req.body)
    res.json(result)
}