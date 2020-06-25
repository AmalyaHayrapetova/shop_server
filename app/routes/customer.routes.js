module.exports = (app) => {
  const customer = require("../controllers/customer.controller.js");

  var router = require("express").Router();

  // Find all customers
  router.get("/", customer.findAllCustomers);

  // Create a new Customer
  router.post("/sign-up", customer.create);

  // LogIn as a Customer
  router.get("/sign-in", customer.findCustomer);

  // Update FirstName
  router.put("/account/info", customer.updateCustomerInfo);

  router.get("/auth", customer.checkCustomer);

  app.use("/customer", router);
};
