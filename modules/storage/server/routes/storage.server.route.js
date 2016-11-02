'use strict';

module.exports = function (app) {
  // Root routing
  var storage = require('../controllers/storage.server.controller');

  app.route('/api/read_storages').get(storage.getStorages);
  app.route('/api/read_storage_categories').post(storage.getCategories);
};
