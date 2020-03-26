module.exports = app => {
    const customer = require("../controllers/customer.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Customer
    router.post("/signup", customer.create);

    // LogIn a  Customer
    router.get("/signin", customer.findAll);


     // Update FirstName
    router.put("/account/name", customer.update);

    // Retrieve all Customer
    // router.get("/:email", customer.findOne);

    app.use('/customer', router);


}