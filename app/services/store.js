const db = require("../models");
const Store = db.store;
const { QueryTypes } = require("sequelize");
sequelize = db.sequelize;

exports.create = async (store) => {
  return Store.create(store);
};

exports.findAll = async (store) => {
  return Store.findAll(store);
};

exports.findStoreInfo = async (name) => {
  return Store.findAll({
    where: {
      StoreName: name,
    },
  });
};

exports.findStore = async (store) => {
  const storeID = await sequelize.query(
    "SELECT `id` FROM `Stores` WHERE StoreName =:StoreName",
    {
      replacements: { StoreName: store },
      type: QueryTypes.SELECT,
    }
  );

  return storeID;
};

exports.update = async (store) => {
  return Store.update(
    {
      StoreLogoPath: store.StoreLogoPath,
      Description: store.Description,
      PhoneNumber: store.PhoneNumber,
    },
    {
      where: {
        StoreName: store.StoreName,
        PhoneNumber: store.PhoneNumber,
      },
      plain: true,
    }
  );
};
