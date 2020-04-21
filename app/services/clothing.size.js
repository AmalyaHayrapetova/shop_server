const db = require("../models");
const Size = db.clothingSize;

exports.create = async (size) => {
  return Size.create(size);
};
