'use strict';

var path = require('path')
    , errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'))
    , mongoose = require('mongoose')
    , Records = mongoose.model('record')
    , connection = mongoose.connection;

exports.add = (request, response) => {
    let record = new Records({
        _id: mongoose.Types.ObjectId(),
        userId: request.body.userId,
        categoryId: request.body.categoryId,
        updated: new Date(),
        values: request.body.record
    });

    console.log('CATEGORYID', request.body.categoryId);

    record.save((err, data) => {
        if (err) {
            return response.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        }

        response.send(data);
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
        }

        response.send(data);
    });
};