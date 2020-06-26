module.exports = (app) => {
  const products = require("../controllers/products.controller");

  const options = {
    dotfiles: "ignore",
    etag: false,
    extensions: ["htm", "html"],
    index: false,
    maxAge: "1d",
    redirect: false,
    setHeaders: function (res, path, stat) {
      res.set("Accept", "application/json");
    },
  };

  var router = require("express").Router(options);

  //  Find all stores

  // Create a new product
  router.post("/new", products.addProductWithColor);

  //find all products
  router.get("/all", products.findAll);

  //find products of clothings or shoes or accessorizes
  router.get("/category/:id", products.findAllProductByCurrentType);

  //find products of sub category clothings or shoes or accessorizes
  router.get("/women/:id", products.findWomenProducts);

  //find products of sub category clothings or shoes or accessorizes
  router.get("/men/:id", products.findMenProducts);

  //find products of sub category clothings or shoes or accessorizes
  router.get("/boys/:id", products.findBoysProducts);

  //find products of sub category clothings or shoes or accessorizes
  router.get("/girls/:id", products.findGirlsProducts);

  //find products of gender(women,men etc), sub category and storeName
  router.get("/find", products.filtrByGenderSubCategory);

  //find products by gender
  router.get("/gender/:id",products.filtrByGender);

  router.get("/", products.findProductWithId);

  app.use("/product", router);
};
