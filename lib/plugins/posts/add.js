'use strict';

var Post = require('../../models/post');

exports.register = function(server, options, next){
  server.route({
    method: 'POST',
    path: '/posts',
    config: {
      description: 'Add a post',
      handler: function(request, reply){
        var post = new Post(request.payload);
        post.save(function(err, post){
          return reply(post);
        });
      }
    }
  });
  return next();
};

exports.register.attributes = {
  name: 'posts.add'
};
