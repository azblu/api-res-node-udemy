const express = require('express');

const cors = require('cors');

class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        //Middlewares
        this.middlewares();
        this.usuariosRoutePath = '/api/usuarios';
        this.routes();
    }

    middlewares(){
        //Directorio publico
        this.app.use(express.static('public'));
        //Lectura y parseo del body
        this.app.use(express.json())
        //CORS
        this.app.use(cors())
    }

    routes(){
        this.app.use(this.usuariosRoutePath, require('../routes/usuario.routes'));
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log('Execute Aplication in the port: ', this.port)
        })
    }

}

module.exports = Server;