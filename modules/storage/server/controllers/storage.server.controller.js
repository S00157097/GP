'use strict';

var path = require('path')
    , errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'))
    , mongoose = require('mongoose')
    , Storages = mongoose.model('Storage')
    , connection = mongoose.connection;


exports.getStorages = function(request, response) {
    Storages.find({}).exec(function(err, storages) {
        if (err) {
            return response.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        } else {
            response.send(storages);
        }
    });
};

exports.getCategories = function(request, response) {
    Storages.findOne({ _id: request.body.storageId }).exec(function(err, storage) {
        if (err) {
            return response.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        } else {
            response.send(storage.categories);
        }
    });
};

exports.insertStorage = function(request, response) {
    var newStorage = {
        _id: mongoose.Types.ObjectId(),
        name: request.body.storageName,
        updated: new Date(),
        categories: []
    };

    connection.collection('storages').insert(newStorage, function(err, storage) {
        if (err) {
            return response.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        } else {
            response.send(newStorage);
        }
    });
};

exports.insertCategory = function(request, response) {
    var newCategory = {
        _id: mongoose.Types.ObjectId(),
        name: request.body.categoryName,
        updated: new Date(),
    };

    Storages.update(
        { _id: request.body.storageId },
        { $push: { categories: newCategory } }
    ).exec(function(err, storage) {
        if (err) {
            return response.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        } else {
            response.send(newCategory);
        }
    });
};

exports.removeStorage = function(request, response) {
    Storages.remove({ _id: request.body.storage._id }, function(err, data) {
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

exports.removeCategory = function(request, response) {
    Storages.update(
        { _id: request.body.storageId },
        {
            $pull: {
                categories: { _id: mongoose.Types.ObjectId(request.body.category._id) }
            }
        }
    ).exec(function(err, storage) {
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