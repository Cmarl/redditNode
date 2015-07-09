'use strict';

var User = require('../../models/user');

exports.register = function(server, options, next){
  server.route({
    method: 'PUT',
    path: '/users/{userId}',
    config: {
      description: 'Update a user',
      handler: function(request, reply){
        console.log(request.params);
        User.findByIdAndUpdate(request.params.userId, request.payload, function(user){
          return reply({user: user});
        });
      }
    }
  });
  return next();
};

exports.register.attributes = {
  name: 'users.update'
};
