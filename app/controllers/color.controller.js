const services = require("../services/color");

//create color
exports.createColor = async (req, res) => {
  const result = await services.create(req.body);
  res.json(result);
};

//create color
exports.createColorWithName = async (req) => {
  const result = await services.create(req);
  return result;
};

//get all colors
exports.findAllAvailableColors = async (req, res) => {
  const result = await services.findAll(req.body);
  res.json(result);
};

exports.checkAvailableColor = async (req) => {
  console.log("The req is: ", req);
  const result = await services.isColorAvailable(req);
  return result[0].Available;
};

exports.findColorById = async (req) => {
  const result = await services.findColorID(req);
  return result[0].id;
};
