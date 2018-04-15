const express = require('express');
const router = express.Router();

const listRoute = require('./list');
const createRoute = require('./create');
const removeRoute = require('./remove');

const passport = require('passport')

router.get('/list', passport.authenticate('local'), listRoute);
router.post('/create', createRoute);
router.use('/remove', removeRoute);

module.exports = router;
