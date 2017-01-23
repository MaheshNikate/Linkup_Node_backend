var utils = require('./../utils/utils');
var users = require('./../users/usersData');
var _ = require('lodash');

var getUserRole = function (req, res) {
    var userId = parseInt(req.body.userId);
    var index = _.findIndex(users, { Id: userId });
    res.json(users[index]);
};

var getUsers = function (req, res) {
    res.json(users);
};

var addRole = function (req, res) {
    var role = req.body.role;
    var index = _.findIndex(users, { Id: parseInt(role.UserId) });
    users[index].Roles.push(req.body.role);
    res.json(role);
};

var revokeRole = function (req, res) {
    var role = req.body.role;
    var userIndex = _.findIndex(users, { Id: parseInt(role.userId) });
    var roleIndex= _.findIndex(users[userIndex].roles, {Id: parseInt(role.id) });
    users[userIndex].Roles.splice(roleIndex,1);
    res.json(role);
};


module.exports = function (app) {
    app.post('/api/User/GetRoles', utils.EnsureAuthenticated,utils.CheckServerType, getUserRole);
    app.get('/api/User/GetUsers', utils.EnsureAuthenticated,utils.CheckServerType, getUsers);
    app.post('/api/User/AddRole', utils.EnsureAuthenticated,utils.CheckServerType, addRole);
    app.post('/api/User/RevokeRole', utils.EnsureAuthenticated,utils.CheckServerType, revokeRole);
};
