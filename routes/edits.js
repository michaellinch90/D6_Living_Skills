const express = require('express');
const router = express.Router();
const groceriesCtrl = require('../controllers/groceries');

router.get('/editGroceries', groceriesCtrl.editGrocery)//link to edit page

router.put('/groceries', groceriesCtrl.update)// Update grocery

module.exports = router ;