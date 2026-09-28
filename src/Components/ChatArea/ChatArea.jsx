import "./ChatArea.css"
import { useContext, useEffect } from "react"
import { ContactContext } from "../../Context/ContactContext"
import ChatSelected from "../ChatSelected/ChatSelected"

export default function ChatArea() {
    const { selected_contact, getMessagesByContact, markAsRead} = useContext(ContactContext)
    const contact_id = selected_contact ? selected_contact.id : undefined
    const messages = getMessagesByContact(contact_id)

    useEffect(()=> {
        if (contact_id !== undefined) {
            markAsRead (contact_id)
        }
    }, [contact_id])

    if (!selected_contact) {
        return (
            <div className="chat-empty">
                <span className="chat-empty-icon">chat</span>
                <p className="chat-empty-title">Seleccioná un chat</p>
                <p className="chat-empty-sub">Elegí una conversacion de la lista para ver los mensajes</p>
            </div>
        )
    }
    return (
        <ChatSelected
            contact={selected_contact}
            messages={messages}
        />
    )
}
