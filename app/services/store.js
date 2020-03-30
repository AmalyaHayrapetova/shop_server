const db = require("../models");
const Store = db.store;


exports.create = async (store) => {
      
    return Store.create(store);
};




