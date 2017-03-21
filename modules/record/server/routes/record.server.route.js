'use strict';

module.exports = function (app) {
  // Root routing
  var record = require('../controllers/record.server.controller');

  app.route('/backend/record/add').post(record.add);
  app.route('/backend/record/list').post(record.list);
  app.route('/backend/record/update').post(record.update);
  app.route('/backend/record/remove').post(record.remove);

  app.route('/api/:apiKey/records').get(record.apiGet);
  app.route('/api/:apiKey/records/:id').get(record.apiGetById);
};
