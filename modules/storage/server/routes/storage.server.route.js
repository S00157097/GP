'use strict';

module.exports = function (app) {
  // Root routing
  var storage = require('../controllers/storage.server.controller');

  app.route('/backend/storage/list').post(storage.list);
  app.route('/backend/storage/update_name').post(storage.updateName);
  app.route('/backend/storage/add').post(storage.add);
  app.route('/backend/storage/delete').post(storage.delete);
  app.route('/backend/storage/latest').post(storage.latest);

  app.route('/api/:apiKey/storages').get(storage.apiGet);
  app.route('/api/:apiKey/storages/:id').get(storage.apiGetById);
};
