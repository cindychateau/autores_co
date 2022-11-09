const Usuario = require("../models/user.model");
const jwt = require('jsonwebtoken');
const secret_key = "Esta es mi llave secreta" //Debe ser la misma a lo largo de toda nuestra app

module.exports.register = (req, res) => {
    const user = new Usuario(req.body);
    user.save()
        .then(usuario =>{
            //res.json(usuario);
            
            //Ponemos un payload -> todo lo que queremos guardar
            const payload = {
                _id: usuario._id
            }

            //Creamos nuestro token
            const myJWT = jwt.sign(payload, secret_key);

            res.cookie("usertoken", myJWT, secret_key,{
                    httpOnly: true //Esto significa que la cookie solamente puede ser leída por el servidor
                }).json(usuario);


        })
        .catch(err => res.status(400).json(err));
}