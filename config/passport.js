const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const User = require('../models/user');

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_SECRET,
            callbackURL: process.env.GOOGLE_CALLBACK
        },
        function (accessToken, refreshToken, profile, cb) {
            User.findOne({googleId: profile.id}).then(async function (user) {
                if (user) return cb(null, user);
                try {
                    user = await User.create({
                        name: profile.displayName,
                        googleId: profile.id,
                        email: profile.emails[0].value,
                        avatar: profile.photos[0].value,
                    }); console.log('thissssss issssss email', user)
                    return cb(null, user);
                } catch (err) {
                    return cb(err);
                }
            });
        }
    )
);

 //these two methods are what allows us to retrieve and store
//the user info into a cookie to allow the session to stay open

//saved to session
// │    req.session.passport.user = {id: '..'}

passport.serializeUser(function (user, cb) {
    cb(null, user._id);
});

//ruser object attaches to the request as req.user 
passport.deserializeUser(function (userId, cb) {
    User.findById(userId).then(function (user) {
        cb(null, user);
    });
});