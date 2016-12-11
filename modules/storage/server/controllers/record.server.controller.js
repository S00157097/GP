'use strict';

var path = require('path')
    , errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'))
    , mongoose = require('mongoose')
    , Records = mongoose.model('records')
    , connection = mongoose.connection;

exports.add = function(request, response) {
    connection.collection('records').insert({
        _id: mongoose.Types.ObjectId(),
        userId: request.body.userId,
        categoryId: request.body.categoryId,
        updated: new Date(),
        created: new Date(),
        values: request.body.record
    }, function(err, data) {
        if (err) {
            console.log(err);
            return response.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        } else {
            response.send(data);
        }
    });
};

exports.list = function(request, response) {
    Records.find({
        userId: request.body.userId,
        categoryId: request.body.categoryId,
    }).exec(function(err, data) {
        if (err) {
            return response.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        } else {
            response.send(data);
        }
    });
};