'use strict';

var User = require('../../models/user');

exports.register = function(server, options, next){
  server.route({
    method: 'GET',
    path: '/users/{userId}',
    config: {
      description: 'Get a user',
      handler: function(request, reply){
        User.find({_id: request.params.userId}, function(err,user){
          if (err){return reply(err);}
          return reply(user);
        });
      }
    }
  });
  return next();
};

exports.register.attributes = {
  name: 'users.get'
};
