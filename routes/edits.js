const express = require('express');
const router = express.Router();
const editCTRL = require('../controllers/edits');

router.get('/:id/editGroceries', editCTRL.editGrocery)//link to edit page
router.put('/:id/updateGroceries', editCTRL.update)// Update grocery


module.exports = router ;