const jwt = require('jsonwebtoken');
const secret_key = "Esta es mi llave secreta";

module.exports.authenticate = (req, res, next) => {
    jwt.verify(req.cookies.usertoken, secret_key, (err, payload) => {
        if(err) {
            res.status(401).json({message: "No estás autorizado!"})
        } else {
            next();
        }
    })
}