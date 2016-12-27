'use strict';

module.exports = function (app) {
  // Root routing
  var category = require('../controllers/category.server.controller');

  app.route('/api/category/list').post(category.list);
  app.route('/api/category/update_name').post(category.updateName);
  app.route('/api/category/add').post(category.add);
  app.route('/api/category/delete').post(category.delete);
};
