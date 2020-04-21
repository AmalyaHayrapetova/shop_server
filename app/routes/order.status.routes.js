module.exports = (app) => {
  const orderStatus = require("../controllers/order.status.controller");

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
  router.get("/", orderStatus.findAllOrderStatuses);

  // Create a new order status
  router.post("/new", orderStatus.createOrderStatus);

  app.use("/order/status", router);
};
