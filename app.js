var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(/^\/[1-9]\d*$/,function (req,res,next) {
    var unixStamp = req.baseUrl.slice(1);
    var unixTimestamp = new Date(Number(unixStamp) * 1000) 
    var fullYear = unixTimestamp.getFullYear();
    var month = unixTimestamp.getMonth();
    var monthString ;
     switch (month) {
        case 0:
            monthString = 'January'
            break;
        case 1:
            monthString = 'February';
            break;
            case 2:
            monthString = 'March';
            break;
            case 3:
            monthString = 'April';
            break;
            case 4:
            monthString = 'May';
            break;
            case 5:
            monthString = 'June';
            break;
            case 6:
            monthString = 'July';
            break;
            case 7:
            monthString = 'August';
            break;
            case 8:
            monthString = 'September';
            break;
            case 9:
            monthString = 'October';
            break;
            case 10:
            monthString = 'November';
            break;
            case 11:
            monthString = 'December';
            break;
        default:
            break;
    }
    var day = unixTimestamp.getDate();
    var natural = monthString+' '+day+', '+fullYear;
    res.send({unix:unixStamp,natural:natural});
});
app.use(routes.all('*',function(req, res, next) {
  var params = req.params[0];
  res.send({unix:null,natural:null});
}));
app.use(function(req, res, next) {
  var params = req.params[0];
  res.send({unix:null,natural:null});
});



// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
