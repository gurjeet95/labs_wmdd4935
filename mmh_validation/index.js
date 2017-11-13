let Hapi = require("hapi");
let server = new Hapi.Server();
const Joi=require('joi');
server.connection({
        host: 'localhost',
        port: Number(process.argv[2])
    });
    
server.route({
  method: 'GET',
  path:'/chicken/{breed}',
  handler: function (request, reply) {
    reply(request.params.breed);
  },
    config: {
         validate: {
                params: {
                   breed : Joi.string().required(),
                }
            }
}
    
    
});
     server.start(function () {
        console.log('Server running at:', server.info.uri);
    });
