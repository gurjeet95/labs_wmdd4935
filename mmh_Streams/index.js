let Hapi = require("hapi");
let server = new Hapi.Server();
const Fs = require('fs');
const Rot13 = require('rot13-transform');
const Path = require('path');
server.connection({
        host: 'localhost',
        port: Number(process.argv[2])
    });
    
server.route({
  method: 'GET',
  path:'/',
  handler: function (request, reply) {
    reply(Fs.createReadStream(Path.join(__dirname, 'sample.txt')).pipe(Rot13()));
  }
})
     server.start(function () {
        console.log('Server running at:', server.info.uri);
    });
