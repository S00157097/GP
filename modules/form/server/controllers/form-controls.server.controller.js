var path = require('path')
    , errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'))
    , mongoose = require('mongoose')
    , FormControls = mongoose.model('formcontrol')
    , connection = mongoose.connection;

exports.list = function (request, response) {
    FormControls.find({}).exec(function (err, data) {
        if (err) {
            return response.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        } else {
            response.send(data);
        }
    });
};