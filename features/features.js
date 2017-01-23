var utils = require('./../utils/utils');
var features = require('./../features/featuresData');
var _ = require('lodash');

var getFeatures = function (req, res) {
    var startPosition, endPosition;
    var gridOptions = req.body.gridOptions;
    var result = { list: {}, gridOptions: {} }
    var featuresList = [];
    if (gridOptions.searchString == "") {
        if (gridOptions.orderBy != "") {
            if (gridOptions.orderBy != "ASC") {
                featuresList = _.sortBy(features.featuresList, function (o) { return o.FeatureName; });
            }
            else {
                featuresList = _.sortBy(features.featuresList, function (o) { return o.FeatureName; }).reverse();
            }
        }
        else {
            featuresList = features.featuresList
        }
    }
    else {
        var searchedFeatures = [];
        for (var i = 0; i < features.featuresList.length; i++) {
            if (features.featuresList[i].FeatureName.indexOf(gridOptions.searchString) > -1) {
                searchedFeatures.push(features.featuresList[i]);
            }
        }
        featuresList = searchedFeatures
    }
    gridOptions.totalItems = featuresList.length
    startPosition = (gridOptions.currentPage - 1) * gridOptions.itemPerPage
    endPosition = startPosition + gridOptions.itemPerPage
    result = { list: featuresList.slice(startPosition, endPosition), gridOptions: gridOptions }
    res.json(result);
};

var addFeature = function (req, res) {
    var feature = req.body.feature;
    feature.id = ++features.ids;
    features.featuresList.push(feature);
    res.json(feature);
};

var deleteFeature = function (req, res) {
    var feature = req.body.feature;
    var index = _.findIndex(features.featuresList, feature);
    features.featuresList.splice(index, 1)
    res.json(feature);
};

var getFeatureById = function (req, res) {
    var featureID = parseInt(req.body.feature.Id);
    var index = _.findIndex(features.featuresList, { Id: featureID });
    res.json(features.featuresList[index]);
};

var editFeature = function (req, res) {
    var feature = req.body.feature;
    var index = _.findIndex(features.featuresList, { Id: feature.Id });
    features.featuresList[index] = feature
    res.json(feature);
};

module.exports = function (app) {
    app.post('/api/Feature/GetFeatures', utils.EnsureAuthenticated,utils.CheckServerType, getFeatures);
    app.post('/api/Feature/GetFeatureById', utils.EnsureAuthenticated,utils.CheckServerType,  getFeatureById);
    app.post('/api/Feature/Add', utils.EnsureAuthenticated,utils.CheckServerType, addFeature);
    app.post('/api/Feature/Delete', utils.EnsureAuthenticated,utils.CheckServerType, deleteFeature);
    app.post('/api/Feature/Edit', utils.EnsureAuthenticated,utils.CheckServerType, editFeature);
};
