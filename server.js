const express = require("express");
const cors = require("cors");
const app = express();

const cookieParser = require('cookie-parser')

//Para usar cookies en la aplicación
app.use(cookieParser());

//Para usar Json y obtener datos de URL
app.use( express.json(), express.urlencoded({ extended: true }) );

//Permite accesar desde un origen distinto
app.use(
    cors({
        //URL de front end
        origin: "http://localhost:3000",
        credentials: true //Usuario haya iniciado sesión, es decir que tenga credenciales
    }),
);

//Inicializa BD
require("./server/config/mongoose.config");

//Importamos rutas
const misRutas = require("./server/routes/autor.routes");
misRutas(app);

//Ejecutamos server
app.listen(8000, ()=>console.log("Servidor listo !"));