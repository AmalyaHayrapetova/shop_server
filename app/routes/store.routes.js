module.exports = app => {
    const store = require("../controllers/store.controller.js");
    var router = require("express").Router();
  
     // Find all customers
    router.get("/", customer.findAllCustomers);

    // Create a new Customer
    router.post("/new", store.createStore);



    app.use('/store', router);


}
