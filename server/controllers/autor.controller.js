const Autor = require("../models/autor.model");

module.exports.get_all = (req, res) => {
    Autor.find().sort({nombre: 1})
        .then(autores => res.json(autores))
        .catch( err =>{
            console.log(err);
            res.status(400).json(err);
        });
}

module.exports.create_autor = (req, res) => {
    Autor.create(req.body)
        .then(autor => res.json(autor))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        })
}