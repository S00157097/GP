'use strict';

module.exports = function (app) {
  // Root routing
  var storage = require('../controllers/storage.server.controller');

  app.route('/random').get(storage.getStorages);
};
