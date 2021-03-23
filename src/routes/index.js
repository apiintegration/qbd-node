const router = require('express').Router();
const accounts = require('./../api/accounts');

router.use('/accounts', accounts);

module.exports = router;