'use strict';

var Mongoose = require('mongoose');

var postSchema = Mongoose.Schema({
  title: {type: String, required: true},
  image: {type: String},
  votes: {type: Number, default: 1, required: true},
  userId: {type: String, required: true},
  userName: {type: String},
  voters: [{type: String}],
  createdAt: {type: Date, required: true, default: Date.now},
  body: {type: String, required: true},
  tags: {type: String},
  comments: [{
    body: {type: String, required: true},
    userId: {type: String},
    userName: {type: String, ref: 'User', required: true},
    votes: {type: Number, default: 1}
  }]
});

var Post = Mongoose.model('Post', postSchema);
module.exports = Post;
