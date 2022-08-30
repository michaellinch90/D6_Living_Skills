  const Grocery = require ('../models/grocery');

  function create (req, res) { //adding activity from form
    const grocery = new Grocery (req.body);
    grocery.save(function(err){
        if (err) return res.render('/');
        res.redirect('/groceries')
    })
}
  
  function index(req, res) {
    Grocery.find({}, function (err, groceries) {
        // if (err) return res.redirect('/');
        console.log(groceries)
        res.render('./groceries', { groceries })
        
      })
  }

  function newItem(req,res) {
    res.render('./groceries')
  }

  module.exports = {
    create,
    index,
    new :newItem
  };
  