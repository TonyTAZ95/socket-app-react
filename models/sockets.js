
class Sockets {
    constructor ( io ) {
        this.io = io;
        this.socketEvents();
    }

    socketEvents() {
        this.io.on( 'connection', ( socket ) => {
            console.log( 'Cliente conectado!! ID: ' + socket.id );
            socket.emit( 'mensaje-bienvenida', { 
                msg: 'Bienvenido al Socket Server!', 
                fecha: new Date()
            } );
            socket.on( 'mensaje-to-server', ( data ) => {
                console.log( data );
                // this.io.emit( 'aviso-from-server', { msg: `${ data.nombre } envió un mensaje al servidor.` } );
                socket.emit( 'mensaje-from-server', data );
            } );
        } );
    }
}

module.exports = Sockets;