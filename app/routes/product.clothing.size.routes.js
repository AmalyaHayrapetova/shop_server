module.exports = app => {
  const productClothingSize = require('../controllers/product.clothing.size.controller.js')

  const options = {
    dotfiles: 'ignore',
    etag: false,
    extensions: ['htm', 'html'],
    index: false,
    maxAge: '1d',
    redirect: false,
    setHeaders: function (res, path, stat) {
      res.set('Accept', 'application/json')
    }
  }

  var router = require('express').Router(options)

  // get all
  router.get('/all', productClothingSize.findAllClothingsSizes)

  router.get('/', productClothingSize.findProductSizeById)
  app.use('/product/clothing/size', router)
}
