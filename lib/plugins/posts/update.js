'use strict';

var Post = require('../../models/post');

exports.register = function(server, options, next){
  server.route({
    method: 'PUT',
    path: '/posts/{postId}',
    config: {
      description: 'Update a post',
      handler: function(request, reply){
        console.log(request.params);
        Post.findByIdAndUpdate(request.params.postId, request.payload, function(post){
          return reply({post: post});
        });
      }
    }
  });
  return next();
};

exports.register.attributes = {
  name: 'posts.update'
};
