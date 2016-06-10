var mongoose = require('mongoose');
var config = require('../Config');
var dbURI = config.dbURI;


mongoose.connect(dbURI);

mongoose.connection.on('connected', function(){
  console.log('mongoose connected!');
});

require('../Models/user');
require('../Models/info');
require('../Models/skills');