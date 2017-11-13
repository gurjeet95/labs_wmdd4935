let Hapi = require("hapi");
let server = new Hapi.Server();
const Joi=require('joi');
server.connection({
        host: 'localhost',
        port: Number(process.argv[2])
    });
    
server.route({
  method: 'POST',
  path:'/login',
  handler: function (request, reply) {
    reply("login successful");
  },
    config: {
        validate: {
               payload: Joi.object({
                   isGuest:Joi.boolean(),
                    username: Joi.string(),
                    password: Joi.string().alphanum(),
                    accessToken: Joi.string().alphanum()
               })
               .options({allowUnknown: true})
               .without('password', 'accessToken')
            }
}
    
    
});
     server.start(function () {
        console.log('Server running at:', server.info.uri);
    });
