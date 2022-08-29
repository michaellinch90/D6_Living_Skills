const express = require('express');
const router = express.Router();
// const groceriesCtrl = require('../controllers/groceries');
const groceriesCtrl = require('../controllers/groceries');
	
// GET /movies/new
router.get('/groceries', groceriesCtrl.new);

// router.get('/new', groceriesCtrl.new);
// // router.post('/', groceriesCtrl.create)

module.exports = router ;