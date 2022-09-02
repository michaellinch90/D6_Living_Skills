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
                console.log(deletedGrocery)
                res.redirect(`/groceries`)
            })
        }
    })
}

// function editGrocery (req, res) {
//     // res.render('groceries/editgroceries', {
//     //     grocery: grocery.findByIdAndUpdate(req.params.id)
//     // })
//     Grocery.findOne({_id: req.params.id}, function(err, grocery){
//         if (err || !grocery) return res.redirect('/groceries');
//         //takes you to views/editGroceris
//         res.render('./editGroceries', {title: "Edit grocery", grocery});
//     });
// ///:id/update
// }

// function update(req, res) {
//     console.log('i am callllllllled')
//     Grocery.findOneAndUpdate(
//       {_id: req.params.id},
//       // update object with updated properties
//       req.body,
      
//       // options object with new: true to make sure updated doc is returned
//       {new: true},
     
//       function(err, grocery) {
//         if (err || !grocery) return res.redirect(`/`);
//         res.redirect(`/groceries`);
//       }
//     );
//   }


  module.exports = {
    create,
    index,
    new :newItem,
    delete : deleteGrocery,
    // update,
    // editGrocery
  };
  