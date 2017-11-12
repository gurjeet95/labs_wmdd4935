let Hapi = require("hapi");
let server = new Hapi.Server();
server.connection({
        host: 'localhost',
        port: Number(process.argv[2])
    });
    
server.route({
  method: 'GET',
  path:'/',
  handler: function (request, reply) {
    reply('Hello hapi');
  }
})
     server.start(function () {
        console.log('Server running at:', server.info.uri);
    });
