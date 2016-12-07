'use strict';

module.exports = function (app) {
  // Root routing
  var formControls = require('../controllers/form-controls.server.controller');
  var form = require('../controllers/form.server.controller');

  app.route('/api/form_controls').get(formControls.list);
  
  app.route('/api/get_form_controls').post(form.list);
  app.route('/api/update_form').post(form.update);
};