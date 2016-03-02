var express = require('express');
var router = express.Router();

/* GET home page. */


router.all('*', function(req, res, next) {
  var params = req.params[0];
  var dateStr = params.slice(1);
  try {
    var date = new Date(dateStr);
    if(date.toString()==='Invalid Date')
     return res.send({unix:null,natural:null});
    var timestamp = Math.round(date.getTime()/1000);
    var fullYear = date.getFullYear();
    var month = date.getMonth();
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
    var day = date.getDate();
    var natural = monthString+' '+day+', '+fullYear;
   return res.send({unix:timestamp,natural:natural});
  } catch (error) {
      return res.send({unix:null,natural:null});
  }
});

module.exports = router;
