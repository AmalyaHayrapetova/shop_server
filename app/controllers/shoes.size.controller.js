const services = require("../services/shoes.size");

// Create a new shoes size
exports.createSize = async (req, res) => {
  const result = await services.create(req.body);
  res.json(result);
};
