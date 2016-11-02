'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var StorageSchema = new Schema({
    name: String,
    updated: String
});

mongoose.model('Storage', StorageSchema);
