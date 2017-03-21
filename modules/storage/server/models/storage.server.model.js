'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var StorageSchema = new Schema({
  _id: Schema.Types.ObjectId,
  userId: String,
  name: String,
  updated: {
    type: Date,
    default: Date.now
  }
});


mongoose.model('Storage', StorageSchema);
