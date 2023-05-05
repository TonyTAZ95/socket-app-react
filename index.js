const Server = require("./models/server");
require( 'dotenv' ).config();

const server = new Server();

server.execute();

// // Servidor de Express
// const express = require( 'express' );
// const app = express();
// // Servidor de sockets
// const server = require('http').createServer(app);
// // Configuración de socket server
// const io = require('socket.io')(server);
// // Desplegar el directorio público
// app.use( express.static( __dirname + '/public' ) );
// io.on('connection', ( socket ) => {
//     console.log( socket.id );
//     socket.emit( 'mensaje-bienvenida', { 
//         msg: 'Bienvenido al Socket Server!', 
//         fecha: new Date()
//     });
//     socket.on( 'mensaje-to-server', ( data ) => {
//         console.log( data );
//         socket.emit( 'mensaje-from-server', data );
//     });
// });
// server.listen( 8080, () => {
//     console.log( 'Server corriendo en puerto 8080' );
// });