module.exports = (app) => {
  const productMaterial = require("../controllers/product.material.controller");

  var router = require("express").Router();

  // Find all categories
  router.get("/", productMaterial.findAllMaterials);

  // Create a new category -> change
  // router.post("/new", productsImages.createProductImages);

  app.use("/product/material", router);
};
