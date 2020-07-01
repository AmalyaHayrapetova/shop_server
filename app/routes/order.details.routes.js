module.exports = (app) => {
    const orderDetails = require("../controllers/order.details.controller");
  
    const options = {
      dotfiles: "ignore",
      etag: false,
      extensions: ["htm", "html"],
      index: false,
      maxAge: "1d",
      redirect: false,
      setHeaders: function (res, path, stat) {
        res.set("Accept", "application/json");
      },
    };
  
    var router = require("express").Router(options);
  
    // Find all statuses
    // router.get("/", orderDetails.findAllAvailableColors);
  
    // Create a new order status
    router.post("/new", orderDetails.createOrderDetail);

    //get order details by order id
    router.get("/customer/details/", orderDetails.findCustomerAllOrderDetailsByOrderNumber)
  
    app.use("/order-details", router);
  };
  