module.exports = (app) => {
    const orders = require("../controllers/orders.controller");
  
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
  
  
    // Create a new order 
    router.post("/new", orders.createNewOrder);

    //find customer orders
    router.get("/:id", orders.findCustomerOrders)


    //router status update
    router.put("/status_update/",orders.updateOrderStatus)

    //router status update
    router.get("/status/",orders.findCustomerOrderStatus)

  
    app.use("/order", router);
  };
  