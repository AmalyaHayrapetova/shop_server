module.exports = (app) => {
  const gender = require("../controllers/gender.controller");

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

  // Find all statuses
  router.get("/", gender.findAllGenderTypes);

  // Create a new order status
  router.post("/new", gender.createGender);

  app.use("/gender", router);
};
