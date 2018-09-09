const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');


const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id)
    .then(user => { 
        done(null, user);
    });
});

passport.use(
    new GoogleStrategy(
        {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,

        callbackURL: '/auth/google/callback',

},
<<<<<<< HEAD
async (accessToken, refreshToken, profile, done) => {
   const existingUser = await User.findOne({ googleId: profile.id }).save(); 
    // console.log('access token', accessToken);
    // console.log('refresh token', refreshToken);
    // console.log('profile', profile);
   
        if (existingUser) {
            // we already have a record with the given profile ID
            done(null, existingUser);
        }
            // we don't have a user record with this ID, make a new record 
            const user = await new User({ googleId: profile.id }).save();
            done(null, user);
        }
=======
(accessToken, refreshToken, profile, done) => {
    new User({ googleId: profile.id }).save(); 
    // console.log('access token', accessToken);
    // console.log('refresh token', refreshToken);
    // console.log('profile', profile);
    User.findOne({ googleId: profile.id }).then(existingUser => {
        if (existingUser) {
            // we already have a record with the given profile ID
            done(null, existingUser);
        } else {
            // we don't have a user record with this ID, make a new record 
            new User({ googleId: profile.id })
            .save()
            .then(user => done(null, user));
        }
    }) 
   }
>>>>>>> 0360f46fe1d117c88753fa2e0d6a017f69d26713
)
); 
