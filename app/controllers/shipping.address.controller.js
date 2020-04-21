const services = require("../services/shipping.address");

// Create a new Shipping Address
exports.createNewShippingAddress = async (req, res) => {
  const result = await services.create(req.body);
  res.json(result);
};

exports.getUserShippingAddresses = async (req, res) => {
  var id = req.params.id;
  const result = await services.findUserShippingAddresses(id);
  res.json(result);
};

exports.removeShippingAddress = async (req, res) => {
  const result = await services.destroy(req.body);
  res.json(result);
};
