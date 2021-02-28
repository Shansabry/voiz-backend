const express = require('express');
const controller = require('../controllers/employer_controller')

const router = express.Router();

const getEmployers = router.get('/getEmployees', controller.getEmployers);

module.exports = { getEmployers };