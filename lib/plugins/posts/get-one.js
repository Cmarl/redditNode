'use strict';

var Post = require('../../models/post');

exports.register = function(server, options, next){
  server.route({
    method: 'GET',
    path: '/posts/one/{postId}',
    config: {
      description: 'Get all or specific posts',
      auth: false,
      handler: function(request, reply){
        if(request.params.postId){
          Post.findOne({_id: request.params.postId}, function(err,post){
            if (err){return reply(err).code(418);}
            return reply(post);
          });
        }
      }
    }
  });
  return next();
};

exports.register.attributes = {
  name: 'posts.get-one'
};
