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
    mongoose.model('Storage').findOne({ _id: request.body.url_data }).exec(function (err, storage) {
        if (err || request.body.url_data == undefined) {
            response.end();
        } else {
            response.send(storage.categories);
        }
    });
};

exports.insertCategory = function (request, response) {
    mongoose.model('Storage').update(
        { _id: request.body.url_data },
        {
            $push: {
                categories: {
                    name: request.body.data,
                    updated: new Date(), 
                }
            }
        }
    ).exec(function (err, storage) {
        if (err || request.body.url_data == undefined) {
            console.log('Err');
            response.end();
        } else {
            /*storage.categories.push({
                name: request.body.data,
                updated: new Date(),  
            });*/
            response.send('Done');
        }
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

exports.removeStorage = function (request, response) {
    mongoose.model('Storage').remove({_id: request.body._id}, function (err, removed) {
        if (err) {
            console.log(err);
        } else {
            response.end('Done');
        }
    });
};