module.exports = (app) => {
  const productGender = require("../controllers/product.gender.controller");

  var router = require("express").Router();

  // Find all product gender
  router.get("/", productGender.findProductGender);

  // Create a new category -> change
  // router.post("/new", productsImages.createProductImages);

  app.use("/product/gender", router);
};
