'use strict';

var path = require('path')
    , errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'))
    , mongoose = require('mongoose')
    , Storages = mongoose.model('Storage')
    , connection = mongoose.connection;

exports.updateName = function (request, response) {
    var toUpdate = {};
    toUpdate['categories.'+request.body.index+'.name'] = request.body.category.name;
    Storages.update({
        $and: [
            { userId: request.body.userId },
            { _id: request.body.storageId }
        ]
    }, {
            $set: toUpdate
        }).exec(function (err, storages) {
            if (err) {
                console.log(err);
                return response.status(400).send({
                    message: errorHandler.getErrorMessage(err)
                });
            } else {
                if (storages != null) {
                    console.log(toUpdate);
                    response.send(storages);
                }
            }
        });
};

exports.list = function (request, response) {
    Storages.findOne({
        $and: [
            { _id: request.body.storageId },
            { userId: request.body.userId }
        ]
    }).exec(function (err, storage) {
        if (err) {
            return response.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        } else {
            if (storage != null) {
                response.send(storage.categories);
            }
        }
    });
};

exports.add = function (request, response) {
    var newCategory = {
        _id: mongoose.Types.ObjectId(),
        name: request.body.categoryName,
        updated: new Date(),
    };

    Storages.update({
        $and: [
            { _id: request.body.storageId },
            { userId: request.body.userId }
        ]
    },
        { $push: { categories: newCategory } }
    ).exec(function (err, storage) {
        if (err) {
            return response.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        } else {
            response.send(newCategory);
        }
    });
};

exports.remove = function (request, response) {
    Storages.update(
        {
            $and: [
                { _id: request.body.storage._id },
                { userId: request.body.userId }
            ]
        },
        {
            $pull: {
                categories: { _id: mongoose.Types.ObjectId(request.body.category._id) }
            }
        }
    ).exec(function (err, storage) {
        if (err) {
            return response.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        } else {
            console.log(storage);
            response.end();
        }
    });
};