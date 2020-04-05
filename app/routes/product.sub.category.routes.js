module.exports = app => {
    const productSubCategory = require("../controllers/product.sub.category.controller");

    var router = require("express").Router();
  
     // Find all categories
    router.get("/all", productSubCategory.findAllProductSubCategories);

    // Create a new category
    router.post("/type", productSubCategory.createProductSubCategory);

    app.use('/product/category', router);


}
