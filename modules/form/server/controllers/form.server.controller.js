'use strict';

var path = require('path')
    , errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'))
    , mongoose = require('mongoose')
    , Form = mongoose.model('form')
    , connection = mongoose.connection;

// Read User's Form
exports.list = (request, response) => {
    Form.findOne({
        userId: request.body.userId,
        categoryId: request.body.categoryId
    }).exec((err, data) => {
        if (err) {
            return response.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        }
        
        response.send(data);
    });
};

// Update User's form'
exports.update = function (request, response) {
    Form.update({
        userId: request.body.userId,
        categoryId: request.body.categoryId
    }, {
            userId: request.body.userId,
            categoryId: request.body.categoryId,
            controls: request.body.controls
        }, { upsert: true }).exec(function (err, data) {
            if (err) {
                return response.status(400).send({
                    message: errorHandler.getErrorMessage(err)
                });
            } else {
                response.end('success');
            }
        });
};