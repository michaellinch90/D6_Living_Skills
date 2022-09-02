  const Grocery = require ('../models/grocery');
const { rawListeners } = require('../models/user');

  function create (req, res) { //adding grocery from form
    req.body.userId = req.user.googleId
    const grocery = new Grocery (req.body);
    grocery.save(function(err){
        if (err) return res.render('/');
        res.redirect('/groceries')
    })
}
  
  function index(req, res) {
    Grocery.find({}, function (err, groceries) {
        if (err) return res.redirect('/');
        res.render('./groceries', { groceries })
        
      })
  }

  function newItem(req,res) {
    res.render('./groceries')
  }


function deleteGrocery(req, res, next) {
    //find grocery item
    Grocery.findOne({id : req.params.id}).then(grocery => {
        if (grocery.userId === req.user.googleId) {
            Grocery.deleteOne({id : req.params.id}).then(deletedGrocery => {
                res.redirect(`/groceries`)
            })
        }
    })
}

  module.exports = {
    create,
    index,
    new :newItem,
    delete : deleteGrocery,
  };
  