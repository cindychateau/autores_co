import React, {useState} from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const NuevoAutor = () => {

    const [nombre, setNombre] = useState("");
    const [imagen, setImagen] = useState("");
    const [libros, setLibros] = useState(false);
    const [cuentos, setCuentos] = useState(false);
    const [articulos, setArticulos] = useState(false);

    const [errors, setErrors] = useState({});

    const history = useHistory();

    const guardarAutor = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/autores", {
            nombre,
            imagen,
            libros,
            cuentos,
            articulos
        })
            .then(res => history.push("/"))
            .catch(err => setErrors(err.response.data.errors))
    }

    return (
        <div>
            <h1>Nuevo Autor</h1>
            <form onSubmit={guardarAutor}>
                <div className="form-group">
                    <label htmlFor="nombre">Nombre:</label>
                    <input type="text" id="nombre" name="nombre" value={nombre} onChange={e => setNombre(e.target.value)} className="form-control" />
                    {errors.nombre ? <span className="text-danger">{errors.nombre.message}</span>: null}
                </div>
                <div className="form-group">
                    <label htmlFor="imagen">URL de Imagen:</label>
                    <input type="text" id="imagen" name="imagen" value={imagen} onChange={e => setImagen(e.target.value)} className="form-control" />
                </div>
                <div className="form-group">
                    <input type="checkbox" className="form-check-input" id="libros" name="libros" checked={libros} onChange={e => setLibros(e.target.checked)} />
                    <label className="form-check-label" htmlFor="libros">
                        Autor de Libros
                    </label>
                </div>
                <div className="form-group">
                    <input type="checkbox" className="form-check-input" id="cuentos" name="cuentos" checked={cuentos} onChange={e => setCuentos(e.target.checked)} />
                    <label className="form-check-label" htmlFor="cuentos">
                        Autor de Cuentos
                    </label>
                </div>
                <div className="form-group">
                    <input type="checkbox" className="form-check-input" id="articulos" name="articulos" checked={articulos} onChange={e => setArticulos(e.target.checked)} />
                    <label className="form-check-label" htmlFor="articulos">
                        Autor de Artículos
                    </label>
                </div>
                <input type="submit" className="btn btn-success" value="Guardar" />
            </form>
        </div>
    )

}

export default NuevoAutor;