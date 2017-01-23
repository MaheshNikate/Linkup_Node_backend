// Permissions of users according to userId

var permissions = {
    userPermission: [{
        userId: 10, //Admin
        Permissions: [
            'REPORTS.READ',
            'ANALYTICS.READ',
            'EXPORT.READ',
            'AUTH.LOGIN',
            'AUTH.LOGOUT',
            'ADMIN.USER.MANAGE',
            'USER.CREATE',
            'USER.READ',
            'USER.UPDATE',
            'USER.DELETE',
            'FEATURE.DELETE',
            'FEATURE.CREATE',
            'FEATURE.READ',
            'FEATURE.UPDATE',

            'DASHBOARD.READ',

        // PROFILE Menus
            'PROFILE.MANAGE',
            'PROFILE.ALLPROFILES.READ',
            'PROFILE.BALCKLISTEDPROFILES.READ',
            'PROFILE.RECENTPROFILES.READ',
            'PROFILE.MYPROFILES.READ',

        // RRF Menus
            'RRF.MANAGE',
            'RRF.MYRRF.READ',
            'RRF.RRFAPPROVAL.READ',
            'RRF.RRFDASHBOARD.READ',

        // RCIC Menus
            'RCIC.MANAGE',
            'RCIC.INTERVIEWERCALENDER.READ',
            'RCIC.MYCALENDER.READ',
            'RCIC.SCHEDULEINTERVIEW.READ',
            'RCIC.IEF.READ',

        // Administrator Menus
            'ADMIN.MANAGE',
            'ADMIN.ROLE.READ',
            'ADMIN.FEATURE.READ',
            'ADMIN.PERMISSION.MANAGE',
            'ADMIN.THEMEPANEL.MANAGE',
            'ADMIN.PRACTICE.MANAGE',
            'ADMIN.USER.MANAGE',
            'ADMIN.TECHNOLOGY.MANAGE',
            'ADMIN.SKILLS.MANAGE',
            'ADMIN.QUALIFICATIONS.MANAGE',
            'ADMIN.DESIGNATION.MANAGE',
            'ADMIN.INTERVIEWROUNDS.MANAGE',
            'ADMIN.OWNERTYPE.MANAGE'
        ]
    }, {
            userId: 11,
            Permissions: [
                'ANALYTICS.READ',
                'AUTH.LOGIN',
                'AUTH.LOGOUT',
                'USER.READ',
                'FEATURE.READ',
                'DASHBOARD.READ',

                'PROFILE.MANAGE',
                'PROFILE.ALLPROFILES.READ',
                'PROFILE.MYPROFILES.READ',

                'RCIC.MANAGE',
                'RCIC.INTERVIEWERCALENDER.READ',
                'RCIC.MYCALENDER.READ',
                'RCIC.SCHEDULEINTERVIEW.READ',
                'RCIC.IEF.READ',
            ]
        }, {
            userId: 12,
            Permissions: [
                'EXPORT.READ',
                'AUTH.LOGIN',
                'AUTH.LOGOUT',
                'USER.READ',
                'FEATURE.CREATE',
                'DASHBOARD.READ',

                'RRF.MANAGE',
                'RRF.MYRRF.READ',
                'RRF.RRFDASHBOARD.READ',

                'RCIC.MANAGE',
                'RCIC.SCHEDULEINTERVIEW.READ',
                'RCIC.IEF.READ',
            ]
        }, {
            userId: 13,
            Permissions: [
                'ANALYTICS.READ',
                'EXPORT.READ',
                'AUTH.LOGIN',
                'AUTH.LOGOUT',
                'USER.READ',
                'USER.UPDATE',
                'DASHBOARD.READ',

                'PROFILE.MANAGE',
                'PROFILE.ALLPROFILES.READ',
                'PROFILE.MYPROFILES.READ',

                'RRF.MANAGE',
                'RRF.MYRRF.READ',
                'RRF.RRFDASHBOARD.READ',

                'RCIC.MANAGE',
                'RCIC.SCHEDULEINTERVIEW.READ',
                'RCIC.IEF.READ',
            ]
        }]
}

permissions.permissionsList = [
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
    },
    {
        Id: 4,
        Key: 'PROFILE.BALCKLISTEDPROFILES.READ',
        Text: 'Can read Blacklisted Profile'
    },
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
    },
    {
        Id: 10,
        Key: 'RRF.RRFDASHBOARD.READ',
        Text: 'Can read RRF Dasboard'
    },
]
module.exports = permissions;