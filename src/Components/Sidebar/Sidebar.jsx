import { ContactContext } from "../../Context/ContactContext";
import useContactSearchTerm from "../../hooks/useContactSearchTerm";
import { Link } from "react-router-dom";
import ContactOption from "../ContactOption/ContactOption";
import formatearFechaSidebar from "../../utils/formatDate";
import "./Sidebar.css"
import { useContext } from "react";
import HeaderSidebar from "../HeaderSidebar/HeaderSidebar";


const FILTROS = [
    {
        id: "todos",
        label: "Todos"
    },
    {
        id: "no_leidos",
        label: "No Leídos"
    },
    {
        id: "leidos",
        label: "Leídos"
    },
]


export default function Sidebar() {

    const { contacts } = useContext (ContactContext)

    const {
        searchTerm,
        filter,
        contacts_filtrados,
        handleChangeSearch,
        handleClearSearch,
        handleChangeFilter,
    } = useContactSearchTerm(contacts)
        
        const header = (
            <HeaderSidebar/>
        )

        const barra_busqueda = (
            <div className="sidebar-search">
                <div className="sidebar-search-input-wrap">
                    <svg 
                        className="sidebar-search-icon"
                        viewBox="0 0 24 24" 
                        height="24" 
                        width="24"
                        aria-hidden="true" 
                        preserveAspectRatio="xMidYMid meet" 
                        fill="#FAFAFA" 
                        xmlns="http://www.w3.org/2000/svg" 
                        xmlns:xlink="http://www.w3.org/1999/xlink"><title>ic-search</title>
                        <path fill="currentColor" d="M9.5 16a6.27 6.27 0 0 1-4.61-1.89A6.27 6.27 0 0 1 3 9.5c0-1.82.63-3.35 1.89-4.61A6.27 6.27 0 0 1 9.5 3c1.82 0 3.35.63 4.61 1.89A6.27 6.27 0 0 1 16 9.5a6.1 6.1 0 0 1-1.3 3.8l5.6 5.6c.18.18.27.42.27.7 0 .28-.09.52-.27.7a.95.95 0 0 1-.7.27.95.95 0 0 1-.7-.27l-5.6-5.6A5.96 5.96 0 0 1 9.5 16Zm0-2c1.25 0 2.31-.44 3.19-1.31A4.34 4.34 0 0 0 14 9.5c0-1.25-.44-2.31-1.31-3.19A4.34 4.34 0 0 0 9.5 5c-1.25 0-2.31.44-3.19 1.31A4.34 4.34 0 0 0 5 9.5c0 1.25.44 2.31 1.31 3.19A4.34 4.34 0 0 0 9.5 14Z"></path></svg>
                        
                    <input
                        type="text"
                        className="sidebar-search-input"
                        placeholder="Buscar un chat o iniciar uno nuevo"
                        value={searchTerm}
                        onChange={handleChangeSearch}
                    />
                    {searchTerm !== "" && (
                        <button
                            type="button"
                            className="sidebar-search-clear"
                            onClick={handleClearSearch}
                            aria-label="Limpiar búsqueda"
                        >
                            ✕
                        </button>
                    )}
                </div>

                <div className="sidebar-filters">
                    {FILTROS.map((opcion) => (
                        <button
                            type="button"
                            key={opcion.id}
                            className={
                                "sidebar-filter" +
                                (filter === opcion.id ? " sidebar-filter--active" : "")
                            }
                            onClick={() => handleChangeFilter(opcion.id)}
                        >
                            {opcion.label}
                        </button>
                    ))}
                </div>
            </div>
        )

        if (contacts.length === 0){
            return (
                <div className="sidebar">
                    {header}
                    {barra_busqueda}
                    <span className="sidebar-empty">No tienes contactos registrados</span>
                </div>
            )
        }

        if (contacts_filtrados.length === 0){
            return (
                <div className="sidebar">
                    {header}
                    {barra_busqueda}
                    <span className="sidebar-empty">No se ha encontrado ningún chat</span>
                </div>
            )
        }

        const contactos_jsx = []
        for (const contacto of contacts_filtrados) {
            contactos_jsx.push(
                <Link 
                className="link-contact"
                to={`/contact/${contacto.id}`}
                key={contacto.id}
                >
                    <ContactOption
                        id={contacto.id}
                        imagen={contacto.image}
                        ultimo_mensaje={contacto.last_message}
                        nombre={contacto.name}
                        mensajes_sin_leer={contacto.unread_messages}
                        fecha_ultimo_mensaje={formatearFechaSidebar(contacto.last_message_time)}
                    />
                </Link>
                )
        }
        return (
            <div className="sidebar">
                    {header}
                    {barra_busqueda}
                <div className="sidebar-contact-list">
                    {contactos_jsx}
                </div>
            </div>
    )
}
