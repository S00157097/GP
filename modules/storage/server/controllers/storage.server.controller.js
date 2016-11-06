'use strict';

var path = require('path')
    , errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'))
    , mongoose = require('mongoose')
    , Storages = mongoose.model('Storage')
    , connection = mongoose.connection;


exports.getStorages = function (request, response) {
    Storages.find({}).exec(function (err, storages) {
        if (err) {
            return response.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        } else {
            response.send(storages);
        }
    });
};

exports.getCategories = function (request, response) {
    Storages.findOne({ _id: request.body.storageId }).exec(function (err, storage) {
        if (err) {
           return response.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        } else {
            response.send(storage.categories);
        }
    });
};

exports.insertStorage = function (request, response) {
    var newStorage = {
        _id: mongoose.Types.ObjectId(),
        name: request.body.storageName,
        updated: new Date()
    };

    connection.collection('storages').insert(newStorage, function (err, storage) {
        if (err) {
            return response.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        } else {
            response.send(newStorage);
        }
    });
};

exports.removeStorage = function (request, response) {
    mongoose.model('Storage').remove({ _id: request.body.storage._id }, function (err, removed) {
        if (err) {
            return response.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        } else {
            response.end();
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
            response.send('Done');
        }
    });
};

exports.removeCategory = function (request, response) {
    mongoose.model('Storage').find({ _id: request.body.storage }, function (err, storage) {
        if (!err) {
            storage[0].categories.splice(parseInt(request.body.index), 1);

            mongoose.model('Storage').update(
                { _id: request.body.storage },
                {
                    $set: {
                        categories: storage[0].categories
                    }
                }
            ).exec(function (err, storage) {
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