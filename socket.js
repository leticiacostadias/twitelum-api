const socketIo = require('socket.io')()

function init () {
    socketIo.on('connect', (client) => {
        console.log('new user connected');

        client.on('disconnect', () => {
            console.log('user disconnected');
        })

        socketClient = client;
    });

    const port = 8080;
    socketIo.listen(port);
    console.log('listening on port ', port);
}

module.exports = { init, socketIo };
