// List of hardcoded Masters along with their details.
var master = {
    // practices: ["EBS", "ECS"],
    // technology: ["Microsoft", "Salesforce", "Angular"],
    // skills: ["C#", "CRM", "SharePoint", "Angular JS"],
    qualifications: [{
        "Id": 1,
        "Value": "XII"
    },
        {
            "Id": 2,
            "Value": "Graduate"
        },
        {
            "Id": 3,
            "Value": "Post Graduate"
        },
        {
            "Id": 4,
            "Value": "Training if Any"
        }],
    year: [{
        "Id": 1,
        "Value": "2010"
    },
        {
            "Id": 2,
            "Value": "2011"
        },
        {
            "Id": 3,
            "Value": "2012"
        },
        {
            "Id": 4,
            "Value": "2013"
        }],
    //designation: ["Trainee", "System Executive", "Senior System Executive"],

    country: [{
        "Id": 1,
        "Value": "India"
    },
        {
            "Id": 2,
            "Value": "US"
        }, {
            "Id": 3,
            "Value": "UK"
        },
        {
            "Id": 4,
            "Value": "Australia"
        }],

    States: [{
        "Id": 1,
        "Value": "Maharashtra"
    },
        {
            "Id": 2,
            "Value": "Goa"
        }, {
            "Id": 3,
            "Value": "Delhi"
        }
    ],

    district: [{
        "Id": 1,
        "Value": "Pune"
    },
        {
            "Id": 2,
            "Value": "Mumbai"
        }, {
            "Id": 3,
            "Value": "Nagpur"
        }
    ],
    grades: [{
        "Id": 1,
        "Value": "A"
    },
        {
            "Id": 2,
            "Value": "B"
        },
        {
            "Id": 3,
            "Value": "C"
        }],

    //state: ["Maharashtra", "Goa", "Delhi"],
    //district: ["Pune", "Mumbai", "Nagpur"],
    //interviewRounds: ["Technical 1", "Technical 2"],
    interviewStatus: ["Selected", "Rejected", "On Hold"],
    ratings: [1, 2, 3, 4, 5],
    interviewMode: ["telephonic", "Face to Face", "Skype"],
    //ownerType: ["Recruiter", "Company", "Employee"],
    visa: ["B1", "H1", "Other"],
    // candidateStatus: ["Open", "Selected", "In Process"],
    RRFStatus: ["Pending Approval", "Open", "Assigned"],
    //interviewers: ["abc", "xyz", "abc"],
    InterviewRound: [{
        "Id": "1",
        "Value": "Technical 1"
    },
        {
            "Id": "2",
            "Value": "Technical 2"
        }],
    interviewers: [{
        "Id": "1",
        "Value": "abc"
    },
        {
            "Id": "2",
            "Value": "xyz"
        }],
    CandidateStatus: [{
        "Id": 1,
        "Value": "Open"
    },
        {
            "Id": 2,
            "Value": "PendingScreening"
        },
        {
            "Id": 3,
            "Value": "Offered"
        },
        {
            "Id": 4,
            "Value": "Selected"
        },
        {
            "Id": 5,
            "Value": "Blacklisted"
        }],

    recruiter: [{
        "Id": 1,
        "Value": "ABC"
    },
        {
            "Id": 2,
            "Value": "XYZ"
        },
        {
            "Id": 3,
            "Value": "PQR"
        },
        {
            "Id": 4,
            "Value": "MNK"
        }]
};

module.exports = master;