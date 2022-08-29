  function newItem(req, res) {
    res.render('groceries');
  }

  module.exports = {
    new : newItem
  };
  