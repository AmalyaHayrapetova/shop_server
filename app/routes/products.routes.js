module.exports = app => {
    const products = require("../controllers/products.controller");

    const options = {
        dotfiles: 'ignore',
        etag: false,
        extensions: ['htm', 'html'],
        index: false,
        maxAge: '1d',
        redirect: false,
        setHeaders: function (res, path, stat) {
          res.set('Accept', "application/json")
        }
      }
      
    var router = require("express").Router(options);
  
    //  Find all stores

    // Create a new product
    router.post("/new", products.addProductWithColor);

    //find all products
    router.get("/",products.findAll)

    app.use('/product', router);

}
