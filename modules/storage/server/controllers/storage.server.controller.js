'use strict';

var path = require('path')
    , mongoose = require('mongoose');


exports.getStorages = function (request, response) {
    mongoose.model('Storage').find(function (err, users) {
        response.send(users);
    });
};