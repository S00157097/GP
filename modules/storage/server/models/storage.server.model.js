'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var StorageSchema = new Schema({
  _id: Schema.Types.ObjectId,
  name: String,
  updated: {
    type: Date,
    default: Date.now
  },
  categories: Array
});

mongoose.model('Storage', StorageSchema);
