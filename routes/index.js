var express = require('express');
var router = express.Router();
const passport = require('passport');

/* GET home page. */
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'D6 Living' });
});

// Google OAuth login route
router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

// Google OAuth callback route
router.get('/auth/google/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/',
    failureRedirect : '/'
  }
));

// Google logout
router.get("/logout", (req, res) => {
  req.logout(req.user, err => {
      if (err) return next(err);
      res.redirect("/");
  });
});




module.exports = router;
