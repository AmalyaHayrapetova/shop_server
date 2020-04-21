const db = require("../models");
const Gender = db.gender;
const { QueryTypes } = require("sequelize");
sequelize = db.sequelize;

exports.create = async (gender) => {
  return Gender.create(gender);
};

exports.findAll = async (gender) => {
  return Gender.findAll(gender);
};

exports.findGenderID = async (gender) => {
  const genderID = await sequelize.query(
    "SELECT `id` FROM `Genders` WHERE GenderType = :GenderType",
    {
      replacements: { GenderType: gender },
      type: QueryTypes.SELECT,
    }
  );
  return genderID;
};
