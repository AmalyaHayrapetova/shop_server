const db = require("../models");
const OrderDetails = db.orderDetails
const Store = require("../controllers/store.controller");
const { QueryTypes } = require("sequelize");
sequelize = db.sequelize;

//total price from customer ID

exports.create = async (items) => {
  return OrderDetails.create(items);
};


exports.findCustomerItems = async(items) => {
    const orderDetail = await sequelize.query(
        ""
    )
}


