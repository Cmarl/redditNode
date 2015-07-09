'use strict';

var Post = require('../../models/post');

exports.register = function(server, options, next){
  server.route({
    method: 'DELETE',
    path: '/posts/{postId}',
    config: {
      description: 'Destroy a post',
      handler: function(request, reply){
        Post.findOne({_id: request.params.postId}, function(err,post){
          if (err){return reply(err);}
          post.remove(function(){
            return reply(post);
          });
        });
      }
    }
  });
  return next();
};

exports.register.attributes = {
  name: 'posts.destroy'
};
