module.exports = app => {
    const store = require("../controllers/store.controller.js");

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
  
     // Find all customers
    router.get("/", store.findAllStores);

    // Create a new Customer
    router.post("/new", store.createStore);

    //update store info 
    router.post("/info", store.updateStoreInfo);

     // Find the store
     router.get("/:id", store.getStore);



    app.use('/store', router);


}
