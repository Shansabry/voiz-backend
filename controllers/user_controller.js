const _ = require('lodash');
const users = require('../data/users');

const login = (req, res) => {
  const data = req.body;
  const isAuthorised = _.find(users, (user) => {
    return user.email === data.email && user.password === data.password
  });
  if (isAuthorised) {
    return res.status(201).json({ name: isAuthorised.name });
  }
  return res.status(401).send([{ status: 401, message: 'Invalid credential' }]);
}

module.exports = { login };