'use strict';

var Mongoose = require('mongoose');

var userSchema = Mongoose.Schema({
  uid: {type: String},
  firebaseId: {type: String, required: true},
  createdAt : {type: Date, required: true, default: Date.now},
  email: {type: String},
  image: {type: String},
  handle: {type: String}
});

var User = Mongoose.model('User', userSchema);
module.exports = User;
