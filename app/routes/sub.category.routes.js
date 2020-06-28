module.exports = (app) => {
  const productSubCategory = require("../controllers/sub.category.controller");

  var router = require("express").Router();

  // Find all categories
  router.get("/all", productSubCategory.findAllProductSubCategories);

  // Create a new category
  router.post("/type", productSubCategory.createProductSubCategory);

  router.get("/", productSubCategory.findSubCategories);

  app.use("/subcategory", router);
};
