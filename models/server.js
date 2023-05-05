
// Servidor de Express
const express   = require( 'express' );
const socketio  = require( 'socket.io' );
const path      = require( 'path' );
const http      = require( 'http' );
const Sockets   = require( './sockets' );
const cors      = require('cors');

class Server {
    
    constructor () {
        this.app    = express();
        this.port   = process.env.PORT;
        this.public_dir = path.resolve( __dirname, '../public' );
        // Servidor de sockets
        this.server = http.createServer( this.app );
        // Configuración de socket server
        this.io = socketio( this.server, { /* Configuraciones */} );
    }

    middlewares () {
        // Desplegar el directorio público
        this.app.use( express.static( this.public_dir ) );
        // CORS
        this.app.use( cors() );
    }

    configureSockets () {
        new Sockets( this.io );
    }

    routes () {
        // Rutas
        this.app.use( '/api/auth', require( './routes/auth' ) );
        this.app.use( '/api/cue', require( './routes/cue' ) );
        this.app.use( '/api/events', require( './routes/events' ) );
        this.app.use( '/api/data', require( './routes/data' ) );
        this.app.use( '/api/prtg', require( './routes/prtg' ) );
        this.app.use( '/api/sicom', require( './routes/sicom' ) );    
        this.app.use( '/cuestionario', require( './routes/cuestionario' ) );
    }

    execute () {
        // Inicializar Middlewares
        this.middlewares();
        // Inicializar Sockets
        this.configureSockets();
        // Inicializar Server
        this.server.listen( this.port, () => {
            console.log( 'Server corriendo en puerto 8080' );
        } );
    }
}

module.exports = Server;