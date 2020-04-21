const db = require("../models");
const OrderStatus = db.orderStatus;

exports.create = async (status) => {
  return OrderStatus.create(status);
};

exports.findAll = async (status) => {
  return OrderStatus.findAll(status);
};
