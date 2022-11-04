import React, {useState, useEffect} from "react";
import {useHistory, useParams} from "react-router-dom";
import axios from "axios";

const ActualizarAutor = () => {

    const {id} = useParams();

    const [nombre, setNombre] = useState("");
    const [imagen, setImagen] = useState("");
    const [libros, setLibros] = useState(false);
    const [cuentos, setCuentos] = useState(false);
    const [articulos, setArticulos] = useState(false);
    const [errors, setErrors] = useState({});

    const history = useHistory();

    useEffect(() => {
        axios.get("http://localhost:8000/api/autores/"+id)
            .then(res => {
                setNombre(res.data.nombre);
                setImagen(res.data.imagen);
                setLibros(res.data.libros);
                setCuentos(res.data.cuentos);
                setArticulos(res.data.articulos);
            })
            .catch(err => history.push('/error'));
    }, [id, history])

    const updateAutor = e => {
        e.preventDefault();
        axios.put("http://localhost:8000/api/autores/"+id, {
            nombre,
            imagen,
            libros,
            cuentos,
            articulos
        })
            .then(res => history.push('/'))
            .catch(err => setErrors(err.response.data.errors));
    }

    return (
        <div>
            <h1>Editar Autor</h1>
            <form onSubmit={updateAutor}>
                <div className="form-group">
                    <label htmlFor="nombre">Nombre:</label>
                    <input type="text" id="nombre" name="nombre" value={nombre} onChange={e => setNombre(e.target.value)} className="form-control" />
                    {errors.nombre ? <span className="text-danger">{errors.nombre.message}</span>: null}
                </div>
                <div className="form-group">
                    <label htmlFor="imagen">URL de Imagen:</label>
                    <div className="row">
                        <div className="col-6">
                            <input type="text" id="imagen" name="imagen" value={imagen} onChange={e => setImagen(e.target.value)} className="form-control" />
                        </div>
                        <div className="col-6">
                            <img src={imagen} className="img-fluid" alt="autor" />
                        </div>
                    </div>
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

export default ActualizarAutor;