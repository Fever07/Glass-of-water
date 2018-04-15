const express = require('express');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const bodyParser = require('body-parser');
const cors = require('cors');
const dbdriver = require('./database/driver');

const ordersRouter = require('./routes/orders/router');

const app = express();
const router = express.Router();

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
app.use(session({
    secret: 'AFSAF7230fH3f7FJ120kfclfaSFASSFAKK18F01NB47NXM9037256NMP23PX237F83700FGB36FNDB618CNASGF',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(
    function(username, password, done) {
        console.log('AUTHENTICATION: ' + username + ' --- ' + password);
        for (let key in users) {
            const user = users[key];
            if (user.username === username && user.password === password) {
                return done(null, user);
            }
        }
        return done(null, false)
    }
))
passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});


const hosts = ['http://localhost:4200', 'http://192.168.100.3:4200']
const corsOptions = {
    origin: function (origin, callback) {
                if (hosts.indexOf(origin) !== -1) {
                    callback(null, true)
                } else {
                    callback(new Error('Not allowed by CORS'))
                }
            }
}

global.db = dbdriver();

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/orders', ordersRouter);

app.get('/', (req, res) => {
    res.send("This is an api for the hand-a-hand-application");
});

app.listen(3000, () => {
    console.log('Started listening at 3000');
})
