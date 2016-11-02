'use strict';

var path = require('path')
    , mongoose = require('mongoose');


exports.getStorages = function (request, response) {
    mongoose.model('Storage').find(function (err, storages) {
        response.send(storages);
    });
};

exports.getCategories = function (request, response) {
    mongoose.model('Storage').findOne({_id: request.body.url_data}).exec(function (err, categories) {
        response.send(categories.categories);
    });
};