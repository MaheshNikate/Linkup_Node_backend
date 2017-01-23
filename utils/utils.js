var jwt = require('jwt-simple');
var moment = require('moment');
var bcrypt = require('bcrypt-node');
var config = require('./../config/config');
var request = require('request');

module.exports = {
    CreateJWT: function (user) {
        var payload = {
            sub: user.Id,
            iat: moment().unix(),
            exp: moment().add(14, 'days').unix()
        };
        return jwt.encode(payload, 'TOKEN_SECRET');
    },
    EnsureAuthenticated: function (req, res, next) {
        if (!req.headers.authorization) {
            return res.status(401).send({ message: 'Please make sure your request has an Authorization header' });
        }
        var token = req.headers.authorization.split(' ')[1];
        var payload = null;
        try {
            payload = jwt.decode(token, 'TOKEN_SECRET');
        }
        catch (err) {
            return res.status(401).send({ message: err.message });
        }

        if (payload.exp <= moment().unix()) {
            return res.status(401).send({ message: 'Token has expired' });
        }
        req.userID = payload.sub;
        next();
    },
    CryptPassword: function (password, callback) {
        bcrypt.genSalt(10, function (err, salt) {
            if (err) {
                return callback(err);
            }
            bcrypt.hash(password, salt, null, function (err, hash) {
                return callback(err, hash);
            });
        });
    },
    ComparePassword: function (password, userPassword, callback) {
        bcrypt.compare(password, userPassword, function (err, isPasswordMatch) {
            if (err) {
                return callback(err);
            }
            return callback(null, isPasswordMatch);
        });
    },
    CheckServerType: function (req, res, next) {
        var serverType = req.headers.server_type;
        if (serverType === 'TestServer') {
            req.headers.host='powerful-lowlands-67740.herokuapp.com';
            request({
                url: 'https://powerful-lowlands-67740.herokuapp.com'+req.url,
                headers: req.headers,
                method:req.method,
                body:JSON.stringify(req.body)
            }, function (err, response) {
                if (response.statusCode === 200) {
                    res.send(response.body);
                } else {
                    res.status(400)
                    res.send(response.statusMessage);
                }
            });
        }
        else {
            next();
        }
    }
};
