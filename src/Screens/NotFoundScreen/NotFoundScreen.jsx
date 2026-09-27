import { Link } from "react-router-dom"

export default function NotFoundScreen() {
    return (
        <div>
            <h1>
            Error 404 pagina no encontrada
            </h1>
            <Link to= {"/"}>Volver a Home</Link>
        </div>
    )
}
