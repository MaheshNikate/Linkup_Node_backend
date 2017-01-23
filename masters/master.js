var utils = require('./../utils/utils');
var master = require('./../masters/masterData');
var _ = require('lodash');

var getPractices = function (req, res) {
    res.json(master.practices);
};

var getTechnologies = function (req, res) {
    res.json(master.technology);
};

var getSkills = function (req, res) {
    res.json(master.skills);
};

var getQualifications = function (req, res) {
    res.json(master.qualifications);
};

var getYears = function (req, res) {
    res.json(master.year);
};
var getDesignations = function (req, res) {
    res.json(master.designation);
};
var getCountries = function (req, res) {
    res.json(master.country);
};
var getStates = function (req, res) {
    res.json(master.States);
};
var getDistricts = function (req, res) {
    res.json(master.district);
};
var getRounds = function (req, res) {
    res.json(master.interviewRounds);
};
var getInterviewStatus = function (req, res) {
    res.json(master.interviewStatus);
};
var getRatings = function (req, res) {
    res.json(master.ratings);
};
var getOwnerTypes = function (req, res) {
    res.json(master.ownerType);
};
var getInterviewMode = function (req, res) {
    res.json(master.interviewMode);
};
var getVisaTypes = function (req, res) {
    res.json(master.visa);
};
var getCandidateStatus = function (req, res) {
    res.json(master.candidateStatus);
};
var getRRFStatus = function (req, res) {
    res.json(master.RRFStatus);
};
var getInterviewers = function (req, res) {
    res.json(master.interviewers);
};

var getGrades = function (req, res) {
    res.json(master.grades);
};

var getRounds = function (req, res) {
    res.json(master.InterviewRound);
};

var getCandidateStatuses = function (req, res) {
    res.json(master.CandidateStatus);
};
var getRecruiter = function (req, res) {
    res.json(master.recruiter);
};

module.exports = function (app) {
    //app.get('/api/Masters/GetPractices', utils.EnsureAuthenticated, getPractices);
    //app.get('/api/Masters/GetTechnologies', utils.EnsureAuthenticated, getTechnologies);
    // app.get('/api/Masters/GetSkills', utils.EnsureAuthenticated, getSkills);
    // app.get('/api/Masters/GetQualifications', utils.EnsureAuthenticated, getQualifications);
    app.get('/api/Masters/GetYears', utils.EnsureAuthenticated, getYears);
    //app.get('/api/Masters/GetDesignations', utils.EnsureAuthenticated, getDesignations);
    app.get('/api/Masters/GetCountries', utils.EnsureAuthenticated, getCountries);
    app.get('/api/Masters/GetStates', utils.EnsureAuthenticated, getStates);
    app.get('/api/Masters/GetDistricts', utils.EnsureAuthenticated, getDistricts);
    //app.get('/api/Masters/GetRounds', utils.EnsureAuthenticated, getRounds);
    app.get('/api/Masters/GetInterviewStatus', utils.EnsureAuthenticated, getInterviewStatus);
    app.get('/api/Masters/GetRatings', utils.EnsureAuthenticated, getRatings);
    //app.get('/api/Masters/GetOwnerTypes', utils.EnsureAuthenticated, getOwnerTypes);
    app.get('/api/Masters/GetInterviewMode', utils.EnsureAuthenticated, getInterviewMode);
    app.get('/api/Masters/GetVisaTypes', utils.EnsureAuthenticated, getVisaTypes);
    //app.get('/api/Masters/GetCandidateStatus', utils.EnsureAuthenticated, getCandidateStatus);
    app.get('/api/Masters/GetRRFStatus', utils.EnsureAuthenticated, getRRFStatus);
    app.get('/api/Masters/GetInterviewers', utils.EnsureAuthenticated, getInterviewers);
    app.get('/api/Masters/GetGrades', utils.EnsureAuthenticated, getGrades);
    app.get('/api/Masters/GetRounds', utils.EnsureAuthenticated, getRounds);
    app.get('/api/Masters/GetCandidateStatuses', utils.EnsureAuthenticated, getCandidateStatuses);
    app.get('/api/Masters/GetRecruiters', utils.EnsureAuthenticated, getRecruiter);

};
