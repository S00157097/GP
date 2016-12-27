'use strict';

module.exports = function (app) {
  // Root routing
  var formControls = require('../controllers/form-controls.server.controller');
  var form = require('../controllers/form.server.controller');

  app.route('/api/form/get_controls').get(formControls.list);
  
  app.route('/api/form/get_form').post(form.list);
  app.route('/api/form/update_form').post(form.update);
};