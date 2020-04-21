module.exports = (app) => {
  const clothingSize = require("../controllers/clothing.size.controller");

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
  router.post("/new", clothingSize.createSize);

  app.use("/clothing/size", router);
};
