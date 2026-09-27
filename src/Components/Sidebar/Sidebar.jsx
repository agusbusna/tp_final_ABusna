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
                        width="16"
                        height="16"
                        aria-hidden="true"
                    >
                        <path
                            fill="#87F65A"
                            d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 1 0-.7.7l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0A4.5 4.5 0 1 1 14 9.5 4.5 4.5 0 0 1 9.5 14z"
                        />
                    </svg>
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
                        key={contacto.id}
                        className="card-contact"
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
