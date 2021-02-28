const employees = require('../data/employers')

const getEmployers = (req, res) => {
  return res.status(201).json(employees);
}

module.exports = { getEmployers };