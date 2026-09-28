import { useContext, useEffect, useRef } from "react";
import "./ChatSelected.css"
import { ContactContext } from "../../Context/ContactContext";
import HeaderChat from "../HeaderChat/HeaderChat"
import Message from "../Message/Message"
import SendingMessage from "../SendingMessage/SendingMessage"

export default function ChatSelected ({contact, messages}) {
    const {sendMessage} = useContext(ContactContext)
    const finDeLista = useRef(null)

    useEffect(()=> {
        finDeLista.current?.scrollIntoView({ behavior: "smooth", block: "end"})
    }, [messages.length])

    function handleSend(texto) {
        sendMessage(contact.id, texto)
    }

    return (
        <div className="chat-selected">
            <HeaderChat contact={contact}/>

            <div className="chat-messages">
                {messages.map((mensaje) => (
                    <Message
                        key= {mensaje.id}
                        text= {mensaje.text}
                        isOutgoing={mensaje.isOutgoing}
                        created_at={mensaje.created_at}
                        status={mensaje.status}
                    />
                ))}
                <div ref= {finDeLista}></div>
            </div>
            <SendingMessage onSend={handleSend}/>
        </div>
    )
}