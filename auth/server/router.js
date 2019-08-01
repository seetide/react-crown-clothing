const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');

// middleware between passport and Route handler.
const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', {session: false });
module.exports = function(app) {

    // 
    app.get('/', requireAuth, function(req, res){
        res.send({hi: 'there'});
    });

    app.post('/signin', requireSignin, Authentication.signin);

    // post request  
    app.post('/signup', Authentication.signup);
}