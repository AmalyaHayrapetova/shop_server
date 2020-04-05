const db = require("../models");
const Customer = db.customer;

exports.create = async (customer) => {
      
    // Create a Customer

    // Save Customers in the database
   return Customer.create(customer);
};

exports.findCustomer = async (customer) => {
  return Customer.findAll(
        {  imit:1,
            where: {
            Email : customer.Email,
            Password:customer.Password
        },
        attributes:['FirstName','LastName']
       })
   
};

exports.findAll = async (customers) => {
   return Customer.findAll(customers);

 };

 exports.update = async (customer) => {
  return  Customer.update( {FirstName : customer.FirstName, LastName : customer.LastName},
    {
        where:{
          Email: customer.Email
        }
      })
   };
  
   exports.findCustomerById = async(customer) => {
     return Customer.findAll({
       where : {
         id : customer.id
       },
       plain: true,
      }
     )}
   