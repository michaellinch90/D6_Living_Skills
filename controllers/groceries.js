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
        if (err) return res.redirect('/');
        res.render('./groceries', { groceries })
        
      })
  }

  function newItem(req,res) {
    res.render('./groceries')
  }

  // Include the next parameter - used for error handling in the catch
function deleteGrocery(req, res, next) {
    // Note the cool "dot" syntax to query on the property of a subdoc
   Grocery.findOneAndDelete({id:req.params.id}, function (err, grocery) {
    if (err){
        console.log(err)
    }
    else{
        console.log("Deleted : ", grocery);
        res.redirect(`/groceries`)
    }
});
  }
//   
  module.exports = {
    create,
    index,
    new :newItem,
    delete : deleteGrocery
  };
  