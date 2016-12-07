'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var StorageSchema = new Schema({
  text: String,
  type: String
});

mongoose.model('formcontrol', StorageSchema);
