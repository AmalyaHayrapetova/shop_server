module.exports = (app) => {
  const productCategory = require("../controllers/category.controller");

  var router = require("express").Router();

  // Find all categories
  router.get("/", productCategory.findAllProductCategories);

  // Create a new category
  router.post("/new", productCategory.createProductCategory);

  app.use("/category", router);
};
