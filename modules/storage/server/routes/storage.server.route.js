'use strict';

module.exports = function (app) {
  // Root routing
  var storage = require('../controllers/storage.server.controller');

  app.route('/api/read_storages').post(storage.list);
  app.route('/api/update_storage_name').post(storage.updateName);
  app.route('/api/insert_storage').post(storage.add);
  app.route('/api/remove_storage').post(storage.remove);
};
