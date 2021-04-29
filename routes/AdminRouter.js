const express = require('express');
const { adminView } = require('../controllers/AdminController');
const {checkSign} = require('../middlewares/auth');
const router = express.Router();

/* GET home page. */
router.get('/',checkSign,adminView );

module.exports = router;