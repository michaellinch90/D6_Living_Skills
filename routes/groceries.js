const express = require('express');
const router = express.Router();

const groceriesCtrl = require('../controllers/groceries');
	
// GET /groceries
router.get('/', groceriesCtrl.new);
// Post /groceries
router.post('/', groceriesCtrl.create);


module.exports = router ;