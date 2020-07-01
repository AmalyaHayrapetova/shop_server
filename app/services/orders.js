const db = require("../models");
const Orders = db.orders;
const { QueryTypes } = require("sequelize");
const validator = require('validator');

exports.createOrder = async (orders) => {

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

exports.findCustomerOrderNum = async (customerID) => {
  const orderNumber = await sequelize.query(
    'SELECT OrderNumber from Orders where CustomerID=:CustomerID Order By UNIX_TIMESTAMP (OrderDate) desc',
    {
      replacements: {
        CustomerID: customerID
      },
      type: QueryTypes.SELECT
    }
  )
  return orderNumber
}

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
