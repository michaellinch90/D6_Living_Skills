const express = require('express');
const router = express.Router();
const editCTRL = require('../controllers/groceries');

router.get('/:id/editGroceries', editCTRL.editGrocery)//link to edit page

router.put('/groceries', editCTRL.update)// Update grocery

module.exports = router ;