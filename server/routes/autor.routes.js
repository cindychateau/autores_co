const AutorController = require("../controllers/autor.controller");

module.exports = app => {
    app.get('/api/autores', AutorController.get_all);
    app.post('/api/autores', AutorController.create_autor);
    app.get('/api/autores/:id', AutorController.get_autor);
    app.put('/api/autores/:id', AutorController.update_autor);
    app.delete('/api/autores/:id', AutorController.delete_autor);
}