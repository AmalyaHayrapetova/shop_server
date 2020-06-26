const services = require("../services/store.manager");

exports.createManager = async (req, res) => {
  const result = await services.create(req.body);
  res.json(result);
};

exports.logInManager = async (req, res) => {
  const result = await services.findManager(req.body);
  res.json(result);
};
