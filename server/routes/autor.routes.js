const AutorController = require("../controllers/autor.controller");

module.exports = app => {
    app.get('/api/autores', AutorController.get_all);
    app.post('/api/autores', AutorController.create_autor);
}