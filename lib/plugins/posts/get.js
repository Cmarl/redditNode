'use strict';

var Post = require('../../models/post');

exports.register = function(server, options, next){
  server.route({
    method: 'GET',
    path: '/posts/{userId?}',
    config: {
      description: 'Get a users posts or all posts',
      auth: false,
      handler: function(request, reply){
        if(request.params.userId){
          Post.find({userId: request.params.userId}, function(err,posts){
            if (err){return reply(err);}
            return reply(posts);
          });
        }else{
          Post.find(function(err, posts){
            if(err){return reply(err);}
            return reply(posts);
          });
        }
      }
    }
  });
  return next();
};

exports.register.attributes = {
  name: 'posts.get'
};
