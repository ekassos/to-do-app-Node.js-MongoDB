module.exports = {
  // checks if user is authenticated  
  isAuthenticated: function(req, res, next) {
      if (req.isAuthenticated()) {
        return next();
      }
    // if user is not authenticated, redirect to login page
      res.render('login', {
        message: 'Please login to continue.',
        messageClass: 'alert-warning'
    });
    },
    // if user is authenticated, redirect to main app page
    notAuthenticated: function(req, res, next) {
      if (!req.isAuthenticated()) {
        return next();
      }
      res.redirect('/todo');      
    }
  };