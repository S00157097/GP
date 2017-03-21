'use strict';

module.exports = function (app) {
  // Root routing
  var category = require('../controllers/category.server.controller');

  app.route('/backend/category/list').post(category.list);
  app.route('/backend/category/update_name').post(category.updateName);
  app.route('/backend/category/add').post(category.add);
  app.route('/backend/category/delete').post(category.delete);
  app.route('/backend/category/latest').post(category.latest);

  app.route('/api/:apiKey/category').get(category.apiGet);
  app.route('/api/:apiKey/category/:id').get(category.apiGetById);

};