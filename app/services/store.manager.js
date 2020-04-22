const db = require("../models");
const Manager = db.storeManager;
const Stores = require("../controllers/store.controller")

exports.create = async (manager) => {
  // Save Customers in the database
  var storeID = await Stores.findStoreID(manager.StoreName);
  manager["StoreID"] = storeID;
  console.log("Manager is|; ", manager)
  var managers = await Manager.create(manager);

  return managers;
};

exports.findManager = async (manager) => {
  return Manager.findAll({
    where: {
      Email: manager.Email,
      Password: manager.Password,
    },
    attributes: ["FirstName", "LastName"],
  });
};
