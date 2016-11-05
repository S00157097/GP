'use strict';

var path = require('path')
    , mongoose = require('mongoose')
    , connection = mongoose.connection;


exports.getStorages = function(request, response) {
    mongoose.model('Storage').find(function(err, storages) {
        response.send(storages);
    });
};

exports.getCategories = function(request, response) {
    mongoose.model('Storage').findOne({ _id: request.body.url_data }).exec(function(err, storage) {
        if (err || request.body.url_data == undefined) {
            response.end();
        } else {
            response.send(storage.categories);
        }
    });
};

exports.insertCategory = function(request, response) {
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
    ).exec(function(err, storage) {
        if (err || request.body.url_data == undefined) {
            console.log('Err');
            response.end();
        } else {
            response.send('Done');
        }
    });
};

exports.insertStorage = function(request, response) {
    connection.collection('storages').insert({
        name: request.body.data,
        updated: new Date(),
        categories: []
    }, function(err, ins) {
        if (err) {
            console.log('Error');
        } else {
            console.log('All Good');
        }
    });
};

exports.removeStorage = function(request, response) {
    mongoose.model('Storage').remove({ _id: request.body._id }, function(err, removed) {
        if (err) {
            console.log(err);
        } else {
            response.end('Done');
        }
    });
};

exports.removeCategory = function(request, response) {
    /*mongoose.model('Storage').find({_id: request.body.storage}, function (err, storage) {
        if (! err) {
            storage.categories.splice(request.body.index, 1);
            console.log(storage);
            response.send();
        }
    });*/

    mongoose.model('Storage').find({ _id: request.body.storage }, function(err, storage) {
        if (!err) {
            storage[0].categories.splice(request.body.index);

            mongoose.model('Storage').update(
                { _id: request.body.storage },
                {
                    $set: {
                        categories: storage[0].categories
                    }
                }
            ).exec(function(err, storage) {
                if (err || request.body.storage == undefined) {
                    console.log('Err');
                    response.end();
                } else {
                    response.send('Done');
                }
            });
        } else {
            console.log(err);
        }
    });
};