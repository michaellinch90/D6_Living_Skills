const express = require('express');
const router = express.Router();

const groceriesCtrl = require('../controllers/groceries');
// const { render } = require('../server');
	
// http://localhost:3000/activities
router.get('/', groceriesCtrl.index); //INDEX: see all activities

//http://localhost:3000/activities/new
router.get('/', groceriesCtrl.new) // viewing form for add new activity

router.post('/', groceriesCtrl.create) //CREATE: add new activity

router.delete('/:id', groceriesCtrl.delete) //DELETE and refresh grocery list

// router.get('/:id/editGroceries', groceriesCtrl.editGrocery)//link to edit page

// router.put('/:id', groceriesCtrl.update)// Update grocery

module.exports = router ;