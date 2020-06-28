module.exports = app => {
  const productColor = require('../controllers/products.color.controller.js')

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
  router.get('/all', productColor.findProductsColors)

  router.get('/', productColor.findProductColorByProductId)

  app.use('/product-color', router)
}
