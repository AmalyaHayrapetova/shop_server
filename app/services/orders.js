const db = require("../models");
const Orders = db.orders;
const { QueryTypes } = require("sequelize");

exports.createOrder = async (orders) => {
  orders[OrderStatusName] = "In Progress";
  return Orders.create(orders);
};

exports.findCustomerOrder = async (customerID) => {
  const customerOrder = await sequelize.query(
    "SELECT * FROM `Orders` WHERE CustomerID =:CustomerID",
    {
      replacements: { CustomerID: customerID },
      type: QueryTypes.SELECT,
    }
  );

  return customerOrder;
};

exports.findCustomerOrderStatus = async (customerID, orderID) => {
  const customerOrder = await sequelize.query(
    "SELECT OrderStatusName FROM `Orders` WHERE CustomerID =:CustomerID and OrderID =: OrderID",
    {
      replacements: {
        CustomerID: customerID,
        OrderID: orderID,
      },
      type: QueryTypes.SELECT,
    }
  );

  return customerOrder;
};

exports.changeOrderStatus = async (order) => {
  return Orders.update(
    {
      OrderStatusName: order.StatusName,
    },
    {
      where: {
        OrderID: order.OrderID,
        CustomerID: order.OrderID,
      },
      plain: true,
    }
  );
};
