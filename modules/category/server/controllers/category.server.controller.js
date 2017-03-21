'use strict';

var path = require('path')
    , errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'))
    , mongoose = require('mongoose')
    , Category = mongoose.model('Category')
    , Storage = mongoose.model('Storage')
    , connection = mongoose.connection;

/**
 * Upcate Category's Name
 */
exports.updateName = function (request, response) {
    Category.update(
        {
            $and: [
                { _id: request.body.category._id },
                { userId: request.body.userId },
                { storageId: request.body.storageId }
            ]
        }, {
            name: request.body.category.name,
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
    let d = new Date();
    let category = new Category({
        _id: mongoose.Types.ObjectId(),
        userId: request.body.userId,
        storageId: request.body.storageId,
        name: request.body.categoryName,
        updated: d
    });

    category.save((err, data) => {
        if (err) {
            return response.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        } else {
            Storage.update({
                $and: [
                    { userId: request.body.userId },
                    { _id: request.body.storageId }
                ]
            }, {
                    updated: d
                }).exec(function (err, data) {
                    if (err) {
                        return response.status(400).send({
                            message: errorHandler.getErrorMessage(err)
                        });
                    } else {
                        response.send(category);
                    }
                });
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
        } else {
            Storage.update({
                $and: [
                    { userId: request.body.userId },
                    { _id: request.body.storageId }
                ]
            }, {
                    updated: new Date()
                }).exec(function (err, data) {
                    if (err) {
                        return response.status(400).send({
                            message: errorHandler.getErrorMessage(err)
                        });
                    } else {
                        response.end();
                    }
                });
        }
    });
};