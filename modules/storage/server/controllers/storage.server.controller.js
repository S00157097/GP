'use strict';

var path = require('path')
    , errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'))
    , mongoose = require('mongoose')
    , Storages = mongoose.model('Storage')
    , connection = mongoose.connection;

exports.updateName = function(request, response) {
    Storages.update(
        {
            $and: [
                { _id: request.body.storage._id },
                { userId: request.body.userId }
            ]
        },
        {
            name: request.body.storage.name,
            updated: new Date()
        }
    ).exec(function(err, data) {
        if (err) {
            return response.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        } else {
            if (data != null) {
                response.end();
            }
        }
    });
};


exports.list = function(request, response) {
    Storages.find(
        { userId: request.body.userId }
    ).exec(function(err, data) {
        if (err) {
            return response.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        } else {
            if (data != null) {
                response.send(data);
            }
        }
    });
};


exports.add = function(request, response) {
    var newStorage = {
        _id: mongoose.Types.ObjectId(),
        userId: request.body.userId,
        name: request.body.storageName,
        updated: new Date(),
        categories: []
    };

    connection.collection('storages').insert(newStorage, function(err, data) {
        if (err) {
            return response.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        } else {
            response.send(newStorage);
        }
    });
};

exports.remove = function(request, response) {
    Storages.remove({
        $and: [
            { _id: request.body.storage._id },
            { userId: request.body.userId }
        ]
    }, function(err, data) {
        if (err) {
            return response.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        } else {
            console.log(data);
            response.end();
        }
    });
};

