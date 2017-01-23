// Return current user's permissions array
var utils = require("./../utils/utils");
var RRFList = require("./../RRF/RRFData");
var _ = require("lodash");

var getRaisedRRF = function(req, res) {
    res.json(RRFList.GetAllRRF);
};

var viewRRF = function(req, res) {
    var RRFID = req.body.RRFID;
    var index = _.findIndex(RRFList.GetAllRRF, { RRFID: RRFID });
    res.json(RRFList.GetAllRRF[index]);
};

var getAllRaisedRRF = function(req, res) {
    res.json(RRFList.GetAllRRF);
};

var getAllRRF = function(req, res) {
    res.json(RRFList.GetAllRRF);
};

var raiseRRF = function(req, res) {
    var rrfDetails = req.body.rrfDetails;
    var rrfID ="RRFID";
    rrfID += ++RRFList.id
    rrfDetails.RRFID = rrfID;
    RRFList.GetAllRRF.push(rrfDetails);
    res.json(RRFList.SaveResult);
};
var actionOnRaisedRRF = function(req, res) {
    var RRFID = req.body.RRFID;
    var Approver = req.body.Approver;
    var Status = req.body.Status;
    var Comments = req.body.Comments;
    var index = _.findIndex(RRFList.GetAllRRF, { RRFID: RRFID });
    RRFList.GetAllRRF[index].RaisedBy = Approver;
    RRFList.GetAllRRF[index].Status = Status;
    res.json(RRFList.Approved);
};

var getStatuswiseAllRRFCount = function(req, res) {
    res.json(RRFList.StatuswiseRRFCount);
};

var saveRRFAssignmentDeatils = function(req, res) {
    var RRFID = req.body.RRFID;
    var index = _.findIndex(RRFList.GetAllRRF, { RRFID: RRFID });
    var AssignedComments = (req.body.AssignedComments);
    for (i = 0; i < req.body.AssignedTo.length; i++) {
        var assignDt = {
            AssignedTo: { Id: req.body.AssignedTo[i], Value: "ABC" },
            AssignedComments: AssignedComments,
            AssignedDate: new Date(),
            UnassigningComment: "",
            AssigneeLastDate: "",
            Status: {Id: 1 ,Value :'Assigned'}
        };
        RRFList.GetAllRRF[index].AssignedData.push(assignDt);
    }
    res.json(RRFList.SaveResult);

};

var unassignRRF = function(req, res) {

    var RRFID = req.body.RRFID;
    var index = _.findIndex(RRFList.GetAllRRF, { RRFID: RRFID });
    var unAssignedComments = (req.body.UnassigningComment);
    var recID = parseInt(req.body.AssignedTo);
    for (i = 0; i < RRFList.GetAllRRF[index].AssignedData.length; i++) {
        if (RRFList.GetAllRRF[index].AssignedData[i].AssignedTo.Id == recID) {
            RRFList.GetAllRRF[index].AssignedData[i].UnassigningComment = unAssignedComments;
            RRFList.GetAllRRF[index].AssignedData[i].AssigneeLastDate = new Date();
            RRFList.GetAllRRF[index].AssignedData[i].Status =  {Id: 1 ,Value :"UnAssigned"};
        }
    }

    res.json(RRFList.SaveResult);
};

var getAssignedRRFDeatils = function(req, res) {
    var RRFID = req.body.RRFID;
    // var index = _.findIndex(RRFList.AssignedData, { RRFID: RRFID });
    // res.json(RRFList.AssignedData[index]);
    res.json(RRFList.AssignedData);
};

var getMyRRF = function(req, res) {
    res.json(RRFList.GetAllRRF);
};

var getStatuswiseMyRRFCount = function(req, res) {
    res.json(RRFList.MyRRFStatuswiseRRFCount);
};

var getRRFByID = function(req, res) {
    var RRFID = req.body.RRFID;
    var index = _.findIndex(RRFList.GetAllRRF, { RRFID: RRFID });
    res.json(RRFList.GetAllRRF[index]);
};

var updateRRF = function(req, res) {
    var rrfDetails = req.body.rrfDetails;
    var index = _.findIndex(RRFList.GetAllRRF, { RRFID: rrfDetails.RRFID });
    RRFList.GetAllRRF[index].NoOfOpenings = rrfDetails.NoOfOpenings;
    RRFList.GetAllRRF[index].Priority = rrfDetails.Priority;
    RRFList.GetAllRRF[index].ExpDateOfJoining = rrfDetails.ExpDateOfJoining;
    RRFList.GetAllRRF[index].Panel = rrfDetails.Panel;
    res.json(RRFList.SaveResult);
};

var closeRRF = function(req, res) {
    var RRFID = req.body.RRFID;
    var index = _.findIndex(RRFList.GetAllRRF, { RRFID: RRFID });
    var closeComment = (req.body.CloseComment);
    RRFList.GetAllRRF[index].Status = { Id: 7, Value: "closed" };
    RRFList.GetAllRRF[index].closeComment = closeComment;
    res.json(RRFList.SaveResult);
};

module.exports = function(app) {
    app.post("/api/RRF/GetRaisedRRF", utils.EnsureAuthenticated, getRaisedRRF);
    app.post("/api/RRF/ViewRRF", utils.EnsureAuthenticated, viewRRF);
    app.get("/api/RRF/GetAllRaisedRRF", utils.EnsureAuthenticated, getAllRaisedRRF);
    app.get("/api/RRF/GetAllRRF", utils.EnsureAuthenticated, getAllRRF);
    app.post("/api/RRF/RaiseRRF", utils.EnsureAuthenticated, raiseRRF);
    app.post("/api/RRF/ActionOnRaisedRRF", utils.EnsureAuthenticated, actionOnRaisedRRF);
    app.get("/api/RRF/GetStatuswiseAllRRFCount", utils.EnsureAuthenticated, getStatuswiseAllRRFCount);
    app.post("/api/RRF/SaveRRFAssignmentDeatils", utils.EnsureAuthenticated, saveRRFAssignmentDeatils);
    app.post("/api/RRF/UnassignRRF", utils.EnsureAuthenticated, unassignRRF);
    app.post("/api/RRF/GetAssignedRRFDeatils", utils.EnsureAuthenticated, getAssignedRRFDeatils);
    app.get("/api/RRF/GetMyRRF", utils.EnsureAuthenticated, getMyRRF);
    app.get("/api/RRF/GetStatuswiseMyRRFCount", utils.EnsureAuthenticated, getStatuswiseMyRRFCount);
    app.get("/api/RRF/GetStatuswiseMyRRFCount", utils.EnsureAuthenticated, getStatuswiseMyRRFCount);
    app.post("/api/RRF/GetRRFByID", utils.EnsureAuthenticated, getRRFByID);
    app.post("/api/RRF/UpdateRRF", utils.EnsureAuthenticated, updateRRF);
    app.post("/api/RRF/CloseRRF", utils.EnsureAuthenticated, closeRRF);

};


