const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./app/models");
const asyncHandler = require('express-async-handler')

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};


app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
require("./app/routes/customer.routes")(app);
require("./app/routes/store.routes")(app);
require("./app/routes/shipping.address.routes")(app);
require("./app/routes/product.category.routes")(app);
require("./app/routes/product.sub.category.routes")(app);
require("./app/routes/order.status.routes")(app);
require("./app/routes/products.routes")(app);
require("./app/routes/color.routes")(app);
require("./app/routes/product.color.routes")(app);
require("./app/routes/product.images.routes")(app);
require("./app/routes/product.material.routes")(app);
require("./app/routes/product.gender.routes")(app);
require("./app/routes/clothing.size.routes")(app);
require("./app/routes/product.clothing.size.routes")(app);
require("./app/routes/shoes.size.routes")(app);
require("./app/routes/product.shoes.size.routes")(app);
require("./app/routes/gender.routes")(app);


db.sequelize.sync({ force: false }).then(() => {
    console.log("Drop and re-sync db.");
  });

  //error handler
  app.use(asyncHandler);

// set port, listen for requests
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
