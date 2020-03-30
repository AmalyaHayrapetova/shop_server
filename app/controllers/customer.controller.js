const services = require("../services/customers")


// Create and Save a new Customer
exports.create = async (req, res) => {

  const result = await services.create(req.body);
  res.json(result);
    
};

// Retrieve the Customer from the database(with email and pass)
exports.findCustomer = async (req, res) => {
  const result = await services.findCustomer(req.body);
  res.json(result);

};

// Retrieve the all customers from Customer table)
exports.findAllCustomers = async (req,res) => {
  const result = await services.findAll(req.body);
  res.json(result);

};


// Update a Customer firstName and lastName by the email in the request
exports.updateCustomerInfo = async (req, res) => {
  const result = await services.update(req.body);
  if(result[0] == 1)
  return res.json(req.body); 

};