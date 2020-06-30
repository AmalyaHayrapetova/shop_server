const db = require('../models')
const Customer = db.customer
const { ErrorHandler } = require('../errors/error')
const { QueryTypes } = require('sequelize')
const { check, validationResult } = require('express-validator/check')
const bcrypt = require('bcrypt')

exports.create = async customer => {
  // Create a Customer
  const result = await checkValidation(customer)
  if (result === 1) {
    return new ErrorHandler(404, 'User with the specified email exists')
  }
  customer['Password'] = await bcrypt.hash(customer.Password, 10)
  return Customer.create(customer)
}

// Check Password

const checkValidation = async req => {
  const user = await sequelize.query(
    'Select Count(id) as count From Customers WHERE Email =:Email',
    {
      replacements: {
        Email: req.Email
      },
      type: QueryTypes.SELECT
    }
  )
  return user[0].count
}

exports.findCustomer = async (customer, next) => {
  try {
    const { Email, Password, id } = customer
    if (!Email || !Password) {
      return new ErrorHandler(404, 'Missing required email and password fields')
    }
    const user = await sequelize.query(
      'Select id, Password, Count(id) as count From Customers ' +
        'WHERE Email =:Email',
      {
        replacements: {
          Email: Email
        },
        type: QueryTypes.SELECT
      }
    )
    console.log('user ', user)
    if (user[0].count === 0) {
      return new ErrorHandler(
        404,
        'User with the specified email does not exists'
      )
    } else if (!(await bcrypt.compare(Password, user[0].Password))) {
      return new ErrorHandler(404, 'Password is wrong')
    }
    return user[0].id
  } catch (error) {
    next(error)
  }
}

exports.findAll = async customers => {
  return Customer.findAll(customers)
}

exports.update = async customer => {
  return Customer.update(
    { FirstName: customer.FirstName, LastName: customer.LastName },
    {
      where: {
        Email: customer.Email
      }
    }
  )
}

exports.findCustomerById = async customer => {
  return Customer.findAll({
    where: {
      id: customer.id
    },
    plain: true
  })
}

exports.findCustomerByEmailAndPass = async customer => {
  return Customer.findAll({
    where: {
      Email: customer.Email,
      Password: customer.Password
    },
    plain: true
  })
}
