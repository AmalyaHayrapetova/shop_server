module.exports = (app) => {
  const productShoesSize = require("../controllers/product.shoes.size.controller.js");

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

  // get all
  router.get("/", productShoesSize.findAllShoesSizes);

  app.use("/product/shoes/size", router);
};
