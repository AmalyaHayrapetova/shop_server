const db = require("../models");
const Store = db.store;


exports.create = async (store) => {
      return Store.create(store);
};



exports.findAll = async(store) => {
    return Store.findAll(store);
}

//fixme
exports.findOne = async(store) => {
    return Store.findAll(
        { 
            limit : 1,
            where: { StoreName:store.id
        },
        // attributes:[store.StoreName]
     });
}

exports.update = async (store) => {
    return Store.update( {StoreLogoPath : store.StoreLogoPath, Description : store.Descriptionin,
        PhoneNumber: store.PhoneNumber},
      {
          where:{
            StoreName : store.StoreName
          }
        })
     };
    

