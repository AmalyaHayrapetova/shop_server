module.exports = app => {
    const shippingAddress = require("../controllers/shipping.address.controller.js");

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
  
     // create new shipping address
    router.post("/new", shippingAddress.createNewShippingAddress);

    //find user shipping address
    router.get("/all/:id", shippingAddress.getUserShippingAddresses);

    //remove shipping address
    router.post("/remove",shippingAddress.removeShippingAddress)

    //fixme add update shippin address

    app.use('/shippingaddress', router);


}
