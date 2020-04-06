const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./app/models");
  
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

db.sequelize.sync({ force: false }).then(() => {
    console.log("Drop and re-sync db.");
  });

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
