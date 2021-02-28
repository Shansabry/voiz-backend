const express = require('express');
const controller = require('../controllers/user_controller')

const router = express.Router();

const login = router.post('/login', controller.login);

module.exports = { login };