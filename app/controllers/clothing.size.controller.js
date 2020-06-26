const services = require("../services/clothing.size");

// Create a new size
exports.createSize = async (req, res) => {
  const result = await services.create(req.body);
  res.json(result);
};
