const http = require('http');
const app = require('./backend/index');
const debug = require('debug')('new-apprenticeship');

const port = process.env.PORT || 3000;

const onError = error => {
    if (error.syscall !== 'listen') {
        throw error;
    }
    switch(error.code) {
        case "EACCESS":
            console.error('You do not have access to this port resource');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error('Port is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

const onListening = () => {
    const ipAddr = server.address();
    const bind = typeof ipAddr === 'string' ? 'pipe' + ipAddr : 'port ' + port;
    debug('Waiting for incomming requests on ' + bind);
}

app.set('port', port);
const server = http.createServer(app);
server.on('error', onError);
server.on('listening', onListening);

server.listen(port);