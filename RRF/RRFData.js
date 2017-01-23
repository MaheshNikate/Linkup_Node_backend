var RRFList = {};



RRFList.GetAllRRF = [{
    "RRFID": "RRFID1",
    "Practice": { Id: 1,Value:"EBS"},
    "Technology": { "Id": 1,"Value":"Microsoft"},
    "PositionTitle": "Developer",
    "Description": "Multi line text",
    "NoOfOpenings": 3,
    "SkillsRequired": [{ "Id": 2,"Value":"AngularJs"},{ "Id": 1,"Value":"SharePoint"}],
    "Designation": { "Id": 1,"Value":"SSE"},
    "MinExp": "3",
    "MaxExp": "5",
    "Priority": { Id: 1,Value:"1"},
    "ExpDateOfJoining": "2016-06-30",
    "RaisedBy": "abc",
    "ApprovedBy": "",
    "Status": { Id: 2, Value: "Rejected" },
    "ClosedComment":"",
    "OpenForNumberOfDays" : 10,
    "CreatedDate"  : "19-05-2016",
    "Panel":[
  { "RoundNumber":
      { "Id":1,
        "Value":"Technical1"
     },
    "Interviewers":[{ 
      "Id":1,
      "Value":"ABC"
    },{ "Id":"2",
      "Value":"XYZ"
    }]
    
  }],
    "AssignedData":
    [{
        "RRFID": "RRFID1",
        "AssignedTo": { Id: 1, Value: "ABC" },

        "AssignedComments": "Multiline Text",
        "AssignedDate": "11/05/2016",
        "UnassigningComment": "Multiline Text",
        "AssigneeLastDate": "11/05/2016",
        "Status":{ Id: 2, Value: "UnAssigned" },
    },
        {
            "RRFID": "RRFID1",
            "AssignedTo": { Id: 2, Value: "XYZ" },
            "ExpClosureDate": "11/05/2016",
            "AssignedComments": "Multiline Text",
            "AssignedDate": "11/05/2016",
            "UnassigningComment": "Multiline Text",
            "AssigneeLastDate": "",
            "Status":{ Id: 1, Value: "Assigned" },
        }],
        "RRFApproval" :[{
            "Approver" : { Id: 1, Value: "ABC" },
            "Status" : "Approved" ,
            "Comments" : "Approved!"
        },
        {
            "Approver" : { Id: 2, Value: "XYZ" },
            "Status" : "Rejected" ,
            "Comments" : "Rejected!"
        }],
},
    {
        "RRFID": "RRFID2",
        "Practice": { Id: 1,Value:"EBS"},
        "Technology": { "Id": 2,"Value":"SAlesForce"},
        "PositionTitle": "Developer",
        "Description": "Multi line text",
        "NoOfOpenings": 1,
        "SkillsRequired": [{ "Id": 1,"Value":"SharePoint"}],
        "Designation": { "Id": 2,"Value":"SSE"},
        "MinExp": "3",
        "MaxExp": "5",
        "Priority":  { Id: 2,Value:"2"},
        "ExpDateOfJoining": "2016-06-30",
        "RaisedBy": "abc",
        "ApprovedBy": "",
        "Status":   { Id: 1, Value: "PendingApproval" },
        "ClosedComment":"",
         "OpenForNumberOfDays" : 10,
          "CreatedDate"  : "19-05-2016",
        // "AssignedData":[], //TODO check when API integration will do

       "Panel":[
  { "RoundNumber":
      { "Id":1,
        "Value":"Technical1"
     },
    "Interviewers":[{ 
      "Id":1,
      "Value":"ABC"
    },{ "Id":"2",
      "Value":"XYZ"
    }]
    
  },
  { "RoundNumber":
      { "Id":2,
        "Value":"Technical2"
      },
      
    "Interviewers":[{ 
      "Id":1,
      "Value":"ABC"
    },{ "Id":"2",
      "Value":"XYZ"
    }]
    
  }
  ],
        "AssignedData":
        [{
            "RRFID": "RRFID2",
            "AssignedTo": { Id: 1, Value: "ABC" },

            "AssignedComments": "Multiline Text",
            "AssignedDate": "11/05/2016",
            "UnassigningComment": "Multiline Text",
            "AssigneeLastDate": "11/05/2016",
            "Status":{ Id: 2, Value: "UnAssigned" }
        }],
        
        "RRFApproval" :[{
            "Approver" : { Id: 1, Value: "ABC" },
            "Status" : "Approved",
            "Comments" : "Approved!"
        },
        {
            "Approver" : { Id: 2, Value: "XYZ" },
            "Status" : "Approved",
            "Comments" : "Approved!"
        }],

    },

]
RRFList.id = 2;

RRFList.StatuswiseRRFCount = {
    "PendingApproval": 5,
    "Rejected": 2,
    "Open": 15,
    "Assigned": 13,
    "InProgress": 13,
    "ClosureApproval": 2,
    "Closed": 50
};

RRFList.MyRRFStatuswiseRRFCount = {
    "PendingApproval":1,
    "Rejected": 0,
    "Open": 2,
    "Assigned": 1,
    "InProgress": 1,
    "ClosureApproval": 2,
    "Closed": 10
};

RRFList.SaveResult = {
    "StatusCode": 1,
    "Message": "Details Saved Successfully"
};

RRFList.Approved = {
    "StatusCode": 1,
    "Message": "Added successfully"
};


RRFList.AssignedData =
[{

  
        "RRFID": 1,
        "AssignedTo": { Id: 1, Value: "ABC" },
        "ExpClosureDate": "11/05/2016",
        "AssignedComments": "Multiline Text",
        "AssignedDate": "11/05/2016",
        "UnassigningComment": "Multiline Text",
        "Status":"UnAssigned",
         "AssigneeLastDate": "11/05/2016",
    },
        {
            "RRFID": 1,
            "AssignedTo": { Id: 2, Value: "XYZ" },
            "ExpClosureDate": "11/05/2016",
            "AssignedComments": "Multiline Text",
            "AssignedDate": "11/05/2016",
            "UnassigningComment": "Multiline Text",
            "Status":"Assigned",
            "AssigneeLastDate": "",
        }];


module.exports = RRFList;