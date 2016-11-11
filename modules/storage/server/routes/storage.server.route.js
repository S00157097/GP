'use strict';

module.exports = function (app) {
  // Root routing
  var storage = require('../controllers/storage.server.controller');
  var category = require('../controllers/category.server.controller');

  app.route('/api/read_storages').post(storage.list);
  app.route('/api/update_storage_name').post(storage.updateName);
  app.route('/api/insert_storage').post(storage.add);
  app.route('/api/remove_storage').post(storage.remove);

  app.route('/api/read_categories').post(storage.list);
  app.route('/api/update_category_name').post(storage.updateName);
  app.route('/api/insert_category').post(storage.add);
  app.route('/api/remove_category').post(storage.remove);
};
