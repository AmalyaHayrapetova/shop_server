module.exports = (app) => {
    const manager = require("../controllers/store.manager.controller.js");
  
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
  
    // Find a manager
    router.get("/sign-in/account", manager.logInManager);
  
    // Create a new manager
    router.post("/sign-up/new", manager.createManager);
  

    app.use("/store/manager", router);
  };
  