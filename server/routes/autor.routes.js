const AutorController = require("../controllers/autor.controller");
const UserController = require("../controllers/user.controller");

const {authenticate} = require("../config/jwt.config");

module.exports = app => {
    app.get('/api/autores', authenticate, AutorController.get_all);
    app.post('/api/autores', authenticate, AutorController.create_autor);
    app.get('/api/autores/:id', authenticate, AutorController.get_autor);
    app.put('/api/autores/:id', authenticate, AutorController.update_autor);
    app.delete('/api/autores/:id', authenticate, AutorController.delete_autor);

    app.post('/api/register', UserController.register);
    app.post('/api/login', UserController.login);
    app.get('/api/logout', UserController.logout);
}