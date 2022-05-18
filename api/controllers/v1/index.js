const express = require('express');
const v1 = express.Router();

const bmi = require('./bmi-controller');

v1.use('/bmi', bmi);

module.exports = v1;