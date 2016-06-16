var express = require('express');
var config  = require("./config/config.json");
var userApi = require("./app/api/controllers/Users");

var app = express();

var bodyParser = require('body-parser');
// body-parser middleware for handling request variables
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api/' + config.version + '/user' , userApi);

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

module.exports = app;
