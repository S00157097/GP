'use strict';

module.exports = function (app) {
  // Root routing
  var storage = require('../controllers/storage.server.controller');

  app.route('/api/read_storages').post(storage.getStorages);
  app.route('/api/update_storage_name').post(storage.updateStorageName);
  app.route('/api/update_category_name').post(storage.updateCategoryName);
  app.route('/api/read_categories').post(storage.getCategories);
  app.route('/api/insert_storage').post(storage.insertStorage);
  app.route('/api/remove_storage').post(storage.removeStorage);
  app.route('/api/insert_category').post(storage.insertCategory);
  app.route('/api/remove_category').post(storage.removeCategory);
};
