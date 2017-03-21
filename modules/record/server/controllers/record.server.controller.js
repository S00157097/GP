'use strict';

var event = require('events');
var emitter = new event.EventEmitter();
var path = require('path')
    , errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'))
    , mongoose = require('mongoose')
    , Records = mongoose.model('record')
    , Category = mongoose.model('Category')
    , connection = mongoose.connection;

emitter.on('UPDATE_CATEGORY', function (user, category, res, data) {
    Category.update({
        $and: [
            { _id: category },
            { userId: user }
        ]
    }, {
            updated: new Date()
        }).exec(function (err, data) {
            if (err) {
                return res.status(400).send({
                    message: errorHandler.getErrorMessage(err)
                });
            } else {
                res.send(data);
            }
        });
});

exports.update = (request, response) => {
    Records.update({
        _id: request.body.record._id,
        userId: request.body.userId,
        categoryId: request.body.categoryId
    }, request.body.record).exec((err, data) => {
        if (err) {
            return response.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        } else {
            emitter.emit('UPDATE_CATEGORY', request.body.userId, request.body.categoryId, response, data);
        }
    });
};

exports.add = (request, response) => {
    let record = new Records({
        _id: mongoose.Types.ObjectId(),
        userId: request.body.userId,
        categoryId: request.body.categoryId,
        updated: new Date(),
        values: request.body.record
    });

    record.save((err, data) => {
        if (err) {
            return response.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        } else {
            emitter.emit('UPDATE_CATEGORY', request.body.userId, request.body.categoryId, response, data);            
        }
    });
};

exports.list = (request, response) => {
    Records.find({
        userId: request.body.userId,
        categoryId: request.body.categoryId,
    }).exec((err, data) => {
        if (err) {
            return response.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        } else {
            response.send(data);
        }
    });
};

exports.remove = (request, response) => {
    Records.remove({
        _id: request.body.recordId,
        userId: request.body.userId,
        categoryId: request.body.categoryId
    }).exec((err, data) => {
        if (err) {
            return response.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        } else {
            emitter.emit('UPDATE_CATEGORY', request.body.userId, request.body.categoryId, response, data);            
        }
    });
};