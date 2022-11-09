const mongoose = require('mongoose');
const bcrypt = require('bcrypt') //Importación de bcrypt, encargada de encriptar -> npm install bcrypt

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "Nombre es obligatorio."]
    },
    lastName: {
        type: String,
        required: [true, "Apellido es obligatorio."]
    },
    email: {
        type: String,
        required: [true, "E-mail es obligatorio."],
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Ingrese un e-mail válido."
        },
        unique: true //Unique no nos va a guardar cuando un email se repite PERO no es un validador
    },
    password: {
        type: String,
        required: [true, "Password es obligatorio."],
        minlength: [8, "Password debe de tener al menos 8 caracteres"]
    }

}, {timestamps: true, versionKey: false})

//Atributo temporal
UserSchema.virtual('confirmPassword')
    .get( ()=> this._confirmPassword )
    .set( value => this._confirmPassword = value );


//Se hace ANTES de validar el esquema de usuario
UserSchema.pre('validate', function(next) {
    if(this.password != this.confirmPassword) {
        this.invalidate('confirmPassword', 'Las contraseñas no coinciden');
    }

    next();
});

//Antes de guardar el usuario, encriptamos la contraseña
UserSchema.pre('save', function(next){
    bcrypt.hash(this.password, 10) //La cantidad de veces que encryptamos o hasheamos la contraseña
        .then(hash => {
            this.password = hash;
            next();
        });
});

const Usuario = mongoose.model("usuarios", UserSchema);
module.exports = Usuario;
