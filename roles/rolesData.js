// List of hardcoded users along with their details.
var roles = {
    roleList: [{
        Id: 1,
        RoleName: 'SuperAdmin',
        Permissions: [
            {
                Id: 1,
                Key: 'DASHBOARD.READ',
                Text: 'Can read Dasboard'
            },
            {
                Id: 2,
                Key: 'PROFILE.MANAGE',
                Text: 'Can manage Profile'
            },
            {
                Id: 3,
                Key: 'PROFILE.ALLPROFILES.READ',
                Text: 'Can read ALL Profile'
            }]
    },
        {
            Id: 2,
            RoleName: 'Management Team',
            Permissions: [
                {
                    Id: 5,
                    Key: 'PROFILE.RECENTPROFILES.READ',
                    Text: 'Can read Recent Profile'
                },
                {
                    Id: 6,
                    Key: 'PROFILE.MYPROFILES.READ',
                    Text: 'Can read My Profile'
                },
                {
                    Id: 7,
                    Key: 'RRF.MANAGE',
                    Text: 'Can manage RRF'
                }]
        },
        {
            Id: 3,
            RoleName: 'Recruitment Head',
            Permissions: [
                {
                    Id: 7,
                    Key: 'RRF.MANAGE',
                    Text: 'Can manage RRF'
                },
                {
                    Id: 8,
                    Key: 'RRF.MYRRF.READ',
                    Text: 'Can read MY RRF '
                },
                {
                    Id: 9,
                    Key: 'RRF.RRFAPPROVAL.READ',
                    Text: 'Can read RRF Approval'
                }]
        },
        {
            Id: 4,
            RoleName: 'Delivery Manager',
            Permissions: [
                {
                    Id: 5,
                    Key: 'PROFILE.RECENTPROFILES.READ',
                    Text: 'Can read Recent Profile'
                },
                {
                    Id: 6,
                    Key: 'PROFILE.MYPROFILES.READ',
                    Text: 'Can read My Profile'
                },
                {
                    Id: 7,
                    Key: 'RRF.MANAGE',
                    Text: 'Can manage RRF'
                }]
        },
        {
            Id: 5,
            RoleName: 'Project Manager',
            Permissions: [
                {
                    Id: 5,
                    Key: 'PROFILE.RECENTPROFILES.READ',
                    Text: 'Can read Recent Profile'
                },
                {
                    Id: 6,
                    Key: 'PROFILE.MYPROFILES.READ',
                    Text: 'Can read My Profile'
                },
                {
                    Id: 7,
                    Key: 'RRF.MANAGE',
                    Text: 'Can manage RRF'
                }]
        },
        {
            Id: 6,
            RoleName: 'HR Team',
            Permissions: [
                {
                    Id: 5,
                    Key: 'PROFILE.RECENTPROFILES.READ',
                    Text: 'Can read Recent Profile'
                },
                {
                    Id: 6,
                    Key: 'PROFILE.MYPROFILES.READ',
                    Text: 'Can read My Profile'
                },
                {
                    Id: 7,
                    Key: 'RRF.MANAGE',
                    Text: 'Can manage RRF'
                }]
        },
        {
            Id: 7,
            RoleName: 'HR Head',
            Permissions: [
                {
                    Id: 5,
                    Key: 'PROFILE.RECENTPROFILES.READ',
                    Text: 'Can read Recent Profile'
                },
                {
                    Id: 6,
                    Key: 'PROFILE.MYPROFILES.READ',
                    Text: 'Can read My Profile'
                },
                {
                    Id: 7,
                    Key: 'RRF.MANAGE',
                    Text: 'Can manage RRF'
                }]
        },
        {
            Id: 8,
            RoleName: 'ESPL Employees',
            Permissions: [
                {
                    Id: 5,
                    Key: 'PROFILE.RECENTPROFILES.READ',
                    Text: 'Can read Recent Profile'
                },
                {
                    Id: 6,
                    Key: 'PROFILE.MYPROFILES.READ',
                    Text: 'Can read My Profile'
                },
                {
                    Id: 7,
                    Key: 'RRF.MANAGE',
                    Text: 'Can manage RRF'
                }]
        }],
    ids: 8
};
module.exports = roles;