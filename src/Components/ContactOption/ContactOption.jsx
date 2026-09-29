import "./ContactOption.css"
import { formatearFechaSidebar } from "../../utils/formatDate"
import { useContext } from "react"
import { ContactContext } from "../../Context/ContactContext"


export default function ContactOption({ imagen, id, nombre, ultimo_mensaje, fecha_ultimo_mensaje, mensajes_sin_leer }) {

    const { contact_id, pinnedIds, togglePin } = useContext(ContactContext)
    const isOpen = Number(contact_id) === id
    const isPinned = pinnedIds.includes(id)

    function getInitials(nombre) {
        if (!nombre) return "?"
        const palabras = nombre.trim().split(" ")
        if (palabras.length === 1) {
            return palabras[0].substring(0, 2).toUpperCase()
        }
        return (palabras[0][0] + palabras[1][0]).toUpperCase()
    }
    function handleTogglePin(evento) {
        evento.preventDefault()
        evento.stopPropagation()
        togglePin(id)
    }

    return (
        <div className="contact-sidebar">
            <div className={"contact-sidebar-inside" + (isOpen ? " active" : "")}>
                <div className='img-container'>
                    <div className="img-contact-container">
                        {imagen ? (
                            <img src={imagen} alt={nombre} className='contact-image' />
                        ) : (
                            <div className="contact-avatar-fallback">
                                {getInitials(nombre)}
                            </div>
                        )}
                    </div>
                </div>

                <div className="contact-container">
                    <div className="contact-sidebar-top">
                        <div className="contact-info-top">
                            <h2 className="contact-name">{nombre}</h2>
                        </div>
                        <span className={mensajes_sin_leer > 0 ? "date-highlights" : "date-info"}>
                            {formatearFechaSidebar(fecha_ultimo_mensaje)}
                        </span>
                    </div>
                    <div className="contact-sidebar-bottom">
                        <p className="msg-contact">{ultimo_mensaje}</p> 
                        <button
                            type="button"
                            className={"contact-pin" + (isPinned ? " contact-pin--active" : "")}
                            onClick={handleTogglePin}
                            aria-label="Desfijar chat"
                            title={isPinned ? "Desfijar chat" : "Fijar chat"}>
                            <svg viewBox="0 0 24 24" height="20" width="20" preserveAspectRatio="xMidYMid meet" class="" fill="#FFFFFF" fill-opacity="0.6" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>ic-push-pin</title><path fill="#FFFFFF" d="M16 5v7l1.7 1.7a1 1 0 0 1 .3.73V15c0 .28-.1.52-.29.71A.94.94 0 0 1 17 16h-4v5.85c0 .28-.1.52-.29.71a.94.94 0 0 1-.71.29.97.97 0 0 1-.71-.29.97.97 0 0 1-.29-.71V16H7a.97.97 0 0 1-.71-.29A.97.97 0 0 1 6 15v-.57a1.03 1.03 0 0 1 .3-.73L8 12V5a.97.97 0 0 1-.71-.29A.97.97 0 0 1 7 4c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29h8c.28 0 .52.1.71.29.2.19.29.43.29.71 0 .28-.1.52-.29.71A.94.94 0 0 1 16 5Zm-7.15 9h6.3L14 12.85V5h-4v7.85L8.85 14Z" fill-opacity="0.6"></path></svg>
                        </button>
                                {mensajes_sin_leer !== null && (
                                    <span className="unread-msg">{mensajes_sin_leer}</span>
                                )}
                    </div>
                </div>
            </div>
        </div>
    )
}
