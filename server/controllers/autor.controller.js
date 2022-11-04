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

module.exports.get_autor = (req, res) => {
    Autor.findOne({_id: req.params.id})
        .then(autor => res.json(autor))
        .catch(err => res.status(400).json(err));
}

module.exports.update_autor = (req, res) => {
    //new:true nos regresa el documento ya modificado
    //runValidators: true nos revisa una vez más las validaciones del modelo
    Autor.findByIdAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators:true})
        .then(autor => res.json(autor))
        .catch(err => res.status(400).json(err));
}

module.exports.delete_autor = (req, res) => {
    Autor.deleteOne({_id: req.params.id})
        .then(result => res.json(result))
        .catch(err => res.status(400).json(err));
}