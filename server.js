//Initialize Express
var express = require('express');
var app = express();
require('./server/Config/database');
require('./server/Config/passport');

var cookieParser = require('cookie-parser');
var session = require('express-session');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var fs = require('fs');
var passport = require('passport');
var config = require('./server/Config');



require('./server/Models/user.js');
require('./server/Models/info.js');


//var routes = require('./server/Routes/index');
var port = process.env.PORT || 8700;




//middleware


app.use(cors());

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser());
app.use(express.static(__dirname + '/public'));




app.use(cookieParser());
app.use(session({secret: config.sessionSecret}));
app.use(passport.initialize());
app.use(passport.session());
var routes = require('./server/Routes/index');



app.use('/api', routes);




app.listen(port, function(err){
  if (err) throw err;
  console.log('server is running on port: ' + port)
});