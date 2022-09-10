const LocalStrategy = require('passport-local').Strategy;
const { getHashedPassword } = require('./function')
const { User } = require('../mongodb/model');

module.exports = function(passport) {
    passport.use(
        // email and password checker
        new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
            // has password for credential privacy
            let hashed = getHashedPassword(password)
            // look for email user entered in database
            User.findOne({email: email}).then(users => {
                // if email is not present in database, alert user
                if (!users) return done(null, false, {
                        message: 'The email address you entered is not registered.',
                    })
                // if email and hashed password match, continue
                if (email === users.email && hashed === users.password) {
                    return done(null, users);
                } else {
                    // if email and hashed password do match, alert user
                    return done(null, false, {
                        message: 'Invalid username or password.',
                    })
                }
            })
        })
    )
    passport.serializeUser(function(user, done) {
        done(null, user.id);
      });
    
      passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
          done(err, user);
        });
      });
}