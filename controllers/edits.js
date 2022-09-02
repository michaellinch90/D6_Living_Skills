const Grocery = require ('../models/grocery');

function editGrocery (req, res) {
    console.log('hello world')
    Grocery.findOne({_id: req.params.id}, function(err, grocery){
        if (err || !grocery) return res.redirect('/groceries');
        res.render('./editGroceries', {title: "Edit grocery", grocery});
    });
}

function update(req, res) {
    Grocery.findOneAndUpdate(
      {_id: req.params.id},req.body,{new: true},
      function(err, grocery) {
        if (err || !grocery) return res.redirect(`/`);
        res.redirect(`/groceries`);
      }
    );
  }

  module.exports = {
    update,
    editGrocery
  }
