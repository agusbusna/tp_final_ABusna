import "./ContactOption.css"
import { formatearFechaSidebar } from "../../utils/formatDate"
import { useContext } from "react"
import { ContactContext } from "../../Context/ContactContext"


export default function ContactOption({ imagen, id, nombre, ultimo_mensaje, fecha_ultimo_mensaje, mensajes_sin_leer }) {
    
    const {contact_id} = useContext(ContactContext)
    const isOpen = Number(contact_id) === id

    function getInitials(nombre) {
        if (!nombre) return "?"
        const palabras = nombre.trim().split(" ")
        if (palabras.length === 1) {
            return palabras[0].substring(0, 2).toUpperCase()
        }
        return (palabras[0][0] + palabras[1][0]).toUpperCase()
    }


    return (
        <div className="contact-sidebar">
            <div className={"contact-sidebar-inside" + (isOpen ? " active" : "")}>
                <div className='img-contact-container'>
                    {imagen ? (
                        <img src={imagen} alt={nombre} className='contact-image' />
                    ) : (
                        <div className="contact-avatar-fallback">
                            {getInitials(nombre)}
                        </div>
                    )}
                </div>
                <div className="contact-msg-wrap">
                    <h2 className="contact-name">{nombre}</h2>
                    <p className="msg-contact">{ultimo_mensaje}</p>
                </div>
                <div className="contact-info">
                    <span className={mensajes_sin_leer > 0 ? "date-highlights" : undefined}>{formatearFechaSidebar(fecha_ultimo_mensaje)}</span>
                    {mensajes_sin_leer !== null && (
                        <span className="unread-msg">{mensajes_sin_leer}</span>
                    )}
                </div>
            </div>
        </div>
    )
}
