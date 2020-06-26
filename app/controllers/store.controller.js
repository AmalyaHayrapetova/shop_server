const services = require("../services/store");

// Create  a new Store
exports.createStore = async (req, res) => {
  const result = await services.create(req.body);
  res.json(result);
};

//get all stores
exports.findAllStores = async (req, res) => {
  const result = await services.findAll(req.body);
  res.json(result);
};

// Update store info
exports.updateStoreInfo = async (req, res) => {
  const result = await services.update(req.body);
  //fixme add if storeName is wrong or no exist
  res.json(result);
};

//find store by name
exports.getStore = async (req, res) => {
  const result = await services.findStoreInfo(req.params.id);
  res.json(result);
};

exports.findStoreID = async (req) => {
  const result = await services.findStore(req);
  return result[0].id;
};
