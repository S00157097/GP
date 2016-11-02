'use strict';

var path = require('path')
    , mongoose = require('mongoose')
    , connection = mongoose.connection;


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

exports.insertStorage = function (request, response) {
    connection.collection('storages').insert({
        name: request.body.data,
        updated: new Date(),
        categories: []
    }, function (err, ins) {
        if (err) {
            console.log('Error');
        } else {
            console.log('All Good');
        }
    });
};