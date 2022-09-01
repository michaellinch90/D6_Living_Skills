  const Grocery = require ('../models/grocery');

  function create (req, res) { //adding grocery from form
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
   Grocery.findOneAndDelete({id:req.params.id}, function (err, grocery) {
    if (err){
        
    }
    else{
        res.redirect(`/groceries`)
    }
});
}

function editGrocery (req, res) {
    // res.render('groceries/editgroceries', {
    //     grocery: grocery.findByIdAndUpdate(req.params.id)
    // })
    Grocery.findOne({_id: req.params.id}, function(err, grocery){
        if (err || !grocery) return res.redirect('/groceries');
        res.render('/editGoceries', {title: "Edit grocery", grocery});
    });
///:id/update
}

function update(req, res) {
    grocery.findOneAndUpdate(
      {_id: req.params.id, userRecommending: req.user._id},
      // update object with updated properties
      req.body,
      // options object with new: true to make sure updated doc is returned
      {new: true},
      function(err, grocery) {
        if (err || !grocery) return res.redirect('/groceries');
        res.redirect(`/groceries/${grocery._id}`);
      }
    );
  }


  module.exports = {
    create,
    index,
    new :newItem,
    delete : deleteGrocery,
    update,
    editGrocery
  };
  