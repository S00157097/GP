'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var StorageSchema = new Schema({
  _id: Schema.Types.ObjectId,
  userId: String,
  categoryId: String,
  controls: Array
});

mongoose.model('form', StorageSchema);
