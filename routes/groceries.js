const express = require('express');
const router = express.Router();
const isLoggedIn = require('../config/auth');

const groceriesCtrl = require('../controllers/groceries');
	
// http://localhost:3000/activities
router.get('/', groceriesCtrl.index); //INDEX: see all activities

//http://localhost:3000/activities/new
router.get('/', groceriesCtrl.new) // viewing form for add new activity

router.post('/', groceriesCtrl.create) //CREATE: add new activity

router.delete('/:id', isLoggedIn, groceriesCtrl.delete) //DELETE and refresh grocery list


module.exports = router ;