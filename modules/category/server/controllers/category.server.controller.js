'use strict';

var path = require('path')
    , errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'))
    , mongoose = require('mongoose')
    , Category = mongoose.model('Category')
    , connection = mongoose.connection;

/**
 * Upcate Category's Name
 */
exports.updateName = function (request, response) {
    Category.update(
        {
            $and: [
                { userId: request.body.userId },
                { storageId: request.body.storageId }
            ]
        }, {
            name: request.body.categoryName,
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
 * Get Categories
 */
exports.list = function (request, response) {
    Category.find({
        $and: [
            { userId: request.body.userId },
            { storageId: request.body.storageId }
        ]
    }).exec((err, data) => {
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
 * Add Category
 */
exports.add = function (request, response) {
    let category = new Category({
        _id: mongoose.Types.ObjectId(),
        userId: request.body.userId,
        storageId: request.body.storageId,
        name: request.body.categoryName,
        updated: new Date()
    });

    category.save((err, data) => {
        if (err) {
            return response.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        } else {
            response.send(category);
        }
    });
};

/**
 * Delete Category
 */
exports.delete = function (request, response) {
    Category.remove({
        $and: [
            { userId: request.body.userId },
            { _id: request.body.categoryId }
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