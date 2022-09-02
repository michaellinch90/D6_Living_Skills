const Grocery = require ('../models/grocery');

function editGrocery (req, res) {
    console.log('hello world')
    Grocery.findOne({_id: req.params.id}, function(err, grocery){
        if (err || !grocery) return res.redirect('/groceries');
        //takes you to views/editGroceries
        res.render('./editGroceries', {title: "Edit grocery", grocery});
    });
///:id/update
}

function update(req, res) {
    console.log('i am callllllllled')
    Grocery.findOneAndUpdate(
      {_id: req.params.id},
      // update object with updated properties
      req.body,
      
      // options object with new: true to make sure updated doc is returned
      {new: true},
     
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