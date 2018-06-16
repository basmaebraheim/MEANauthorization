var createError = require('http-errors')
var express = require('express')
var path = require('path')
const jwt = require('jsonwebtoken')
const cors = require('cors')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
const mongoose = require('mongoose')
var db = 'mongodb://basma:a123456@ds161700.mlab.com:61700/yummydb'
mongoose.connect(db, err => {
  if(err){
    console.error(err);
  }else{
    console.log("connected correctly");
  }
})
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
