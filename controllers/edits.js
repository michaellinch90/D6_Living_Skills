const Grocery = require ('../models/grocery');

function editGrocery (req, res) {
    console.log('hello world')
    Grocery.findOne({_id: req.params.id}, function(err, grocery){
        if (err || !grocery) return res.redirect('/groceries');
        res.render('./editGroceries', {title: "Edit grocery", grocery});
    });
}

function update(req, res, next) {
    //find grocery item
    Grocery.findOne({id : req.params.id}).then(grocery => {
        if (grocery.userId === req.user.googleId) {
            Grocery.updateOne({id : req.params.id}, req.body).then(updatedGrocery => {
                console.log(updatedGrocery)
                res.redirect(`/groceries`)
            })
        }
    })
}


  
  module.exports = {
    update,
    editGrocery
  }
