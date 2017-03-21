'use strict';

var event = require('events');
var emitter = new event.EventEmitter();
var path = require('path')
    , errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'))
    , mongoose = require('mongoose')
    , Category = mongoose.model('Category')
    , Storage = mongoose.model('Storage')
    , Records = mongoose.model('record')
    , connection = mongoose.connection;

emitter.on('UPDATE_STORAGE', function (user, storage, res, val) {
    Storage.update({
        $and: [
            { userId: user },
            { _id: storage }
        ]
    }, {
            updated: new Date()
        }).exec(function (err, data) {
            if (err) {
                return res.status(400).send({
                    message: errorHandler.getErrorMessage(err)
                });
            } else {
                res.send(val);
            }
        });
});

exports.latest = function (request, response) {
    Category.find({
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
            emitter.emit('UPDATE_STORAGE', request.body.userId, request.body.storageId, response, category);
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
            emitter.emit('UPDATE_STORAGE', request.body.userId, request.body.storageId, response, data);
        }
    });
};



exports.apiGet = function (request, response) {
    let categories = [];
    Category.find({
        userId: request.params.apiKey
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

                    response.json(data2.reduce((st, item, index) => {
                        st.push({
                            id: index + 1,
                            name: item.name,
                            updated: item.updated,
                            records: parseRecords(data3, item._id)
                        });
                        return st;
                    }, []));
                }
            });
        }
    });

};

exports.apiGetById = function (request, response) {
    let categories = [];
    Category.find({
        userId: request.params.apiKey
    }).exec(function (err2, data2) {
        if (err2 || !data2) {
            response.json({
                error: 'err categories'
            });
        } else {
            let categories = data2
                .filter((item, index) => index == parseInt(request.params.id) - 1)
                .map(item => item._id);
            data2 = data2
                .filter((item, index) => index == parseInt(request.params.id) - 1);

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

                    response.json(data2.reduce((st, item, index) => {
                        st.push({
                            id: index + 1,
                            name: item.name,
                            updated: item.updated,
                            records: parseRecords(data3, item._id)
                        });
                        return st;
                    }, []));
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