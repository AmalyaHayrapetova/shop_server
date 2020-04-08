module.exports = app => {

    const productsImages = require("../controllers/product.images.controller");

    var router = require("express").Router();
  
     // Find all categories
    // router.get("/", productCategory.findAllProductCategories);

    // Create a new category -> change
    // router.post("/new", productsImages.createProductImages);

    

    app.use('/product/images', router);

}