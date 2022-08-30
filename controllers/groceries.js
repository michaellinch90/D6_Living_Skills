  const Grocery = require ('../models/grocery');

  function create (req, res) {
    Grocery.create(req.body);
	console.log(req.body);
	res.redirect('groceries');
  }
  
  function newItem(req, res) {
    res.render('./groceries');
  }

  module.exports = {
    create,
    new : newItem
  };
  