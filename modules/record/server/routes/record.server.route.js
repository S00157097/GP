'use strict';

module.exports = function (app) {
  // Root routing
  var record = require('../controllers/record.server.controller');

  app.route('/backend/record/add').post(record.add);
  app.route('/backend/record/list').post(record.list);
};
