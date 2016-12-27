'use strict';

module.exports = function (app) {
  // Root routing
  var storage = require('../controllers/storage.server.controller');

  app.route('/api/storage/list').post(storage.list);
  app.route('/api/storage/update_name').post(storage.updateName);
  app.route('/api/storage/add').post(storage.add);
  app.route('/api/storage/delete').post(storage.delete);
};
