module.exports = app => {
    const customer = require("../controllers/customer.controller.js");
  
    var router = require("express").Router();
  
     // Find all customers
    router.get("/", customer.findAllCustomers);

    // Create a new Customer
    router.post("/signup", customer.create);

    // LogIn as a Customer
    router.get("/signin", customer.findCustomer);

    // Update FirstName
    router.put("/account/info", customer.updateCustomerInfo);


    app.use('/customer', router);


}
