'use strict';

var event = require('events');
var emitter = new event.EventEmitter();
var path = require('path')
    , errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'))
    , mongoose = require('mongoose')
    , Storage = mongoose.model('Storage')
    , Category = mongoose.model('Category')
    , Records = mongoose.model('record')
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




exports.apiGet = function (request, response) {
    let categories = [];
    Storage.find({
        userId: request.params.apiKey
    }).exec(function (err, data) {
        if (err || !data) {
            response.json({
                error: 'err'
            });
        } else {
            let storages = data.map(item => item._id);

            Category.find({
                $and: [
                    { userId: request.params.apiKey },
                    { storageId: { $in: storages } }
                ]
            }).exec(function (err2, data2) {
                if (err2 || !data2) {
                    response.json({
                        error: 'err'
                    });
                } else {
                    categories = data2.map(item => item._id);

                    Records.find({
                        $and: [
                            { userId: request.params.apiKey },
                            { categoryId: { $in: categories } }
                        ]
                    }).exec(function (err3, data3) {
                        if (err3 || !data3) {
                            response.json({
                                error: 'err'
                            });
                        } else {

                            response.json(data.reduce((st, item, index) => {
                                st.push({
                                    id: index + 1,
                                    name: item.name,
                                    updated: item.updated,
                                    categories: parseCategories(data2, data3, item._id)
                                });
                                return st;
                            }, []));
                        }
                    });
                }
            });
        }
    });
};

exports.apiGetById = function (request, response) {
    let categories = [];
    Storage.find({
        userId: request.params.apiKey
    }).exec(function (err, data) {
        if (err || !data) {
            response.json({
                error: 'err storages'
            });
        } else {
            let storages = data
                .filter((item, index) => index == parseInt(request.params.id) - 1)
                .map(item => item._id);
            data = data
                .filter((item, index) => index == parseInt(request.params.id) - 1);

            Category.find({
                $and: [
                    { userId: request.params.apiKey },
                    { storageId: { $in: storages } }
                ]
            }).exec(function (err2, data2) {
                if (err2 || !data2) {
                    response.json({
                        error: 'err categories'
                    });
                } else {
                    categories = data2.map(item => item._id);

                    Records.find({
                        $and: [
                            { userId: request.params.apiKey },
                            { categoryId: { $in: categories } }
                        ]
                    }).exec(function (err3, data3) {
                        if (err3 || !data3) {
                            response.json({
                                error: 'err records'
                            });
                        } else {

                            response.json(data.reduce((st, item, index) => {
                                st.push({
                                    id: index + 1,
                                    name: item.name,
                                    updated: item.updated,
                                    categories: parseCategories(data2, data3, item._id)
                                });
                                return st;
                            }, []));
                        }
                    });
                }
            });
        }
    });
};

function parseCategories(categories, records, storage) {
    let arr = [];
    let counter = 1;
    for (let i = 0; i < categories.length; i++) {
        if (categories[i].storageId == storage) {
            arr.push({
                id: counter,
                name: categories[i].name,
                updated: categories[i].updated,
                records: parseRecords(records, categories[i]._id)
            });
            counter++;
        }
    }

    return arr;
}

function parseRecords(records, category) {
    let arr = [];
    for (let i = 0; i < records.length; i++) {
        if (records[i].categoryId == category) {
            arr.push(records[i].values);
        } else {
            
        }
    }

    return arr;
}