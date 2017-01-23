// List of hardcoded users along with their details.
var users = [
    {
        Id: 10,
        UserName: 'admin',
        Password: 'admin',
        Roles: [{
            Id: 1,
            RoleName: 'SuperAdmin'
        },
            {
                Id: 2,
                RoleName: 'Management Team'
            }]
    },
    {
        Id: 11,
        UserName: 'user1',
        Password: 'Password',
        Roles: [{
            Id: 2,
            RoleName: 'Management Team'
        }]
    },
    {
        Id: 12,
        UserName: 'user2',
        Password: 'Password',
        Roles: [{
            Id: 2,
            RoleName: 'Management Team'
        }]
    },
    {
        Id: 13,
        UserName: 'user3',
        Password: 'Password',
        Roles: [{
            Id: 2,
            RoleName: 'Management Team'
        }]
    }];
module.exports = users;