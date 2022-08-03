const {response, request} = require('express')

const usuarioGet = (req=request, res=response)=> {
    //Destructuracion
    const {name, age=25} = req.query
    const params = req.query
    res.status(200).json({
        msg: 'get api - controlador',
        params,
        name,
        age
    });
}

const usuarioPost = (req, res=response)=> {
    const body = req.body;

    res.json({
        msg: 'post api - controlador',
        body
    });
}

const usuarioDelete = (req, res=response)=> {
    res.json({
        msg: 'delete api - controlador'
    });
}

const usuarioPut = (req, res=response)=>{

    const {id} = req.params

    res.json({
        msg: 'delete - api controlador',
        id
    });
}

const usuarioPatch = (req, res=response)=>{
    res.json({
        msg: 'patch - api'
    });
}

module.exports = {
    usuarioGet, usuarioPost, usuarioDelete, usuarioPut, usuarioPatch
}