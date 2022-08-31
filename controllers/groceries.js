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
    Grocery.findOne({'groceries._id' : req.params.id}).then(function(grocery) {
        
        //  const item = grocery(req.params.id)
        //  console.log(item, 'item')
        //     // Find the review subdoc using the id method on Mongoose arrays
        //   // https://mongoosejs.com/docs/subdocs.html
        //   const item = Grocery.id(req.params.id);
        //    Ensure that the review was created by the logged in user
        //    if (!review.user.equals(req.user._id)) return res.redirect(`/movies/${movie._id}`);
        //   Remove the review using the remove method of the subdoc
          grocery.remove();
          // Save the updated movie
          grocery.save().then(function() {
            // Redirect back to the movie's show view
            res.redirect(`groceries`);
          }).catch(function(err) {
            console.log('we have hit the error');
            // Let Express display an error
            return next(err);
            // res.redirect(`/movies/${movie._id}`);
          });
        });
  }
//   
  module.exports = {
    create,
    index,
    new :newItem,
    delete : deleteGrocery
  };
  