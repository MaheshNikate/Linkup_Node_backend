var express = require('express'),
    app = express(),
    server = require('http').createServer(app);

var path = require('path');
var bodyParser = require('body-parser');

var allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
        res.send(200);
    }
    else {
        next();
    }
};

app.use(allowCrossDomain);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
require('./auth/auth')(app);
require('./permissions/permissions')(app);
require('./features/features')(app);
require('./roles/roles')(app);
require('./RRF/RRF')(app);
require('./users/users')(app);
require('./masters/master')(app);
app.get('/', function (req, res) {
    res.send('App Loaded...');
});

server.listen(process.env.PORT || 3100, function () {
    console.log('RMS APP listening on port 3100!');
});