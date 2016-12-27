'use strict';

module.exports = function (app) {
  // Root routing
  var record = require('../controllers/record.server.controller');

  app.route('/api/record/add').post(record.add);
  app.route('/api/record/list').post(record.list);
};
