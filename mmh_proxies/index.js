let Hapi = require('hapi');
let server = new Hapi.Server();
let H2o2 = require('h2o2');
server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});

server.register(H2o2, function (err) {
        if (err) throw err;
    });
server.route({
    method: 'GET',
    path: '/proxy',
    handler: {
        proxy: {
            host:'localhost',
            port:65535
        }
    }
});

server.start((err) => {
    if (err) throw err;
});