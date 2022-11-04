import { Link } from "react-router-dom";

const Error = () => {
    return(
        <div>
            <h1 className="text-danger">ERROR!</h1>
            <h2>No encontramos el autor que buscabas</h2>
            <Link className="btn btn-primary" to="/">Regresar a Home</Link>
        </div>
    )
}

export default Error;