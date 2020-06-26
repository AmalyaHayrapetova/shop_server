module.exports = (app) => {
  const shoesSize = require("../controllers/shoes.size.controller");

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
  // router.get("/", productColor.findAllAvailableColors);

  // Create a new order status
  router.post("/new", shoesSize.createSize);

  app.use("/shoes/size", router);
};
