/**
 * Module dependencies.
 */
var mongoose = require('mongoose');
var express = require('express');
var connect = require('connect');
var app = express();
var port = process.env.PORT || 8080;

// Configuration
app.use(express.static(__dirname + '/public'));
app.use(connect.logger('dev'));
app.use(connect.json());
app.use(connect.urlencoded());

var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function() {
    // CONNECTED TO MONGODB SERVER
    console.log("Connected to mongod server");
});

mongoose.connect('mongodb://127.0.0.1:27017/node-android-chat');

// Routes

require('./routes/routes.js')(app);

app.listen(port);

console.log('The App runs on port ' + port);
