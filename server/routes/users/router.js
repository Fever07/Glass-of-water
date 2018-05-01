const express = require('express');
const router = express.Router();
const passport = require('passport');

const ordersRoute = require('./orders');
const performRoute = require('./perform');
const performedRoute = require('./performed');

router.get('/orders', ordersRoute);
router.post('/perform', performRoute);
router.get('/performed', performedRoute);

module.exports = router;