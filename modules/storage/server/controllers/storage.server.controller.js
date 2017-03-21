'use strict';

var event = require('events');
var emitter = new event.EventEmitter();
var path = require('path')
    , errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'))
    , mongoose = require('mongoose')
    , Storage = mongoose.model('Storage')
    , connection = mongoose.connection;



exports.latest = function (request, response) {
    Storage.find({
        userId: request.body.userId
    })
        .sort('-updated')
        .limit(request.body.count)
        .exec(function (err, data) {
            if (err) {
                return response.status(400).send({
                    message: errorHandler.getErrorMessage(err)
                });
            }

            if (data !== null) {
                response.send(data);
            }
        });
};

/**
 * Read Storages
 */
exports.list = function (request, response) {
    Storage.find(
        { userId: request.body.userId }
    ).exec((err, data) => {
        if (err) {
            return response.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        }

        if (data !== null) {
            response.send(data);
        }
    });
};

/**
 * Update Storage's Name
 */
exports.updateName = function (request, response) {
    Storage.update(
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
    ).exec((err, data) => {
        if (err) {
            return response.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        }

        response.end();
    });
};

/**
 * Add Storage
 */
exports.add = (request, response) => {
    let storage = new Storage({
        _id: mongoose.Types.ObjectId(),
        userId: request.body.userId,
        name: request.body.storageName,
        updated: new Date()
    });

    storage.save((err, data) => {
        if (err) {
            return response.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        }

        response.send(storage);
    });
};

/**
 * Delete Storage
 */
exports.delete = function (request, response) {
    Storage.remove({
        $and: [
            { _id: request.body.storage._id },
            { userId: request.body.userId }
        ]
    }, (err, data) => {
        if (err) {
            return response.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        }

        response.end();
    });
};
