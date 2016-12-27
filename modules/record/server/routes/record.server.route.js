'use strict';

module.exports = function (app) {
  // Root routing
  var record = require('../controllers/record.server.controller');

  app.route('/api/insert_record').post(record.add);
  app.route('/api/get_records').post(record.list);
};
