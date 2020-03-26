const db = require("../models");
const Customer = db.customer;
const Op = db.Sequelize.Op;


// Create and Save a new Customer
exports.create = (req, res) => {
    if (!req.body.Email) {
        res.status(400).send({
          message: "Email cannot be empty!"
        });
        return;
      }
    
      // Create a Customer
      const customer = {
        Email: req.body.Email,
        Password: req.body.Password,
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        PhoneNumber: req.body.PhoneNumber
      };

    
      // Save Customers in the database
      Customer.create(customer)  
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Customer."
          });
        });
    
};

// Retrieve the Customer from the database(with email and pass)
exports.findOne = (req, res) => {
    Customer.findAll(
        {  imit:1,
            where: {
            Email : req.body.Email,
            Password:req.body.Password
        },
        attributes:['FirstName','LastName']
       })
   
     .then(data => {
         console.log(data)
        
            res.send(data); 
     })
     .catch(err => {
       res.status(500).send({
         message: "Error retrieving Customer with email="
       });
     });

};

// Retrieve the Customer from the database(with email and pass)
exports.findAll = (req, res) => {
    Customer.findAll()
        
     .then(data => {
         console.log(data)
        
            res.send(data); 
     })
     .catch(err => {
       res.status(500).send({
         message: "Error retrieving Customer with email="
       });
     });

};


// Update a Customer firstName by the email in the request
exports.updateFirstName = (req, res) => {
  Customer.update( {FirstName : req.body.FirstName},{
      where:{
        Email: req.body.Email
      }
    //   attributes:['FirstName']
    })
.then(data => {
     res.send(data);
})
.catch(err => {
  res.status(500).send({
    message: "Cannot update FirstName of Customer with email " + req.body.Email
  });
});
};
