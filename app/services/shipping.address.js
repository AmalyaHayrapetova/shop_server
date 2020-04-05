const db = require("../models");
const ShippingAddress = db.shippingAddress;


// create a new shipping address
exports.create = async (shippingAddress) => {
      
    // Create a ShippingAddress

   return ShippingAddress.create(shippingAddress);
};


//find all shipping addresses for one user
exports.findUserShippingAddresses = async (userID) => {
   return ShippingAddress.findAll(
       { 
        where: {
        id : userID,
     },
        imit:1,
   })
};


 //remove shipping address
exports.destroy = async (shippingAddress) => {
    return ShippingAddress.destroy(
        {
            where: {
                Country: shippingAddress.Country,
                City: shippingAddress.City,
                Street: shippingAddress.Street,
                Flat: shippingAddress.Flat,
                District: shippingAddress.District,
                ZipCode: shippingAddress.ZipCode,
                PhoneNumber: shippingAddress.PhoneNumber,
            }
        }
    );
}