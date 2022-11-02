import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const TodosAutores = () => {

    const [autores, setAutores] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/autores")
            .then(res => setAutores(res.data))
            .catch(err => console.log(err));
    }, [])

    return (
        <div>
            <h1>Autores</h1>
            <Link to="/nuevo" className="btn btn-success">Nuevo Autor</Link>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Imagen</th>
                        <th>Libros</th>
                        <th>Cuentos</th>
                        <th>Artículos</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        autores.map((autor, index) => (
                            <tr key={index}>
                                <td>{autor.nombre}</td>
                                <td>
                                    <img src={autor.imagen} alt="autor" className="img-fluid" />
                                </td>
                                <td>
                                    {
                                        autor.libros ? <span className="bi bi-check text-success"></span> : <span className="bi bi-x text-danger"></span>
                                    }
                                </td>
                                <td>
                                    {
                                        autor.cuentos ? <span className="bi bi-check text-success"></span> : <span className="bi bi-x text-danger"></span>
                                    }
                                </td>
                                <td>
                                    {
                                        autor.articulos ? <span className="bi bi-check text-success"></span> : <span className="bi bi-x text-danger"></span>
                                    }
                                </td>
                                <td></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )

}

export default TodosAutores;