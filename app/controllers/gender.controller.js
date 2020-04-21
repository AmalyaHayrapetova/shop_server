const services = require("../services/gender");

exports.createGender = async (req, res) => {
  const result = await services.create(req.body);
  res.json(result);
};

//get all genders
exports.findAllGenderTypes = async (req, res) => {
  const result = await services.findAll(req.body);
  res.json(result);
};

exports.findGenderById = async (req) => {
  const result = await services.findGenderID(req);
  return result[0].id;
};
