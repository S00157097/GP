'use strict';

var path = require('path')
    , mongoose = require('mongoose')
    , Storage = mongoose.model('Storage');


exports.getStorages = function (request, response) {
    Storage.find()
    .populate('storage', 'name')
    .exec(function (err, storages) {
        if (err) {
            response.send('Error');
        } else {
            response.json(storages);
        }
    });
};