const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('./models/User'); // Add User model later

const app = express();

// MongoDB connection setup (replace with your MongoDB connection string)
mongoose.connect('your-mongo-connection-string', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log("MongoDB connection error: ", err));

// Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: 'workoutTrackerSecret',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

// Set view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// Static files (CSS, JS, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Routes
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

// Error handling
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.render('error', { message: err.message, error: err });
});

module.exports = app;
