const db = require("../models");
const ShoesSize = db.shoesSize;
sequelize = db.sequelize;

exports.create = async (size) => {
  return ShoesSize.create(size);
};
