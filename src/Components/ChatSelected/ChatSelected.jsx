import { useContext, useEffect, useRef } from "react";
import "./ChatSelected.css"
import { ContactContext } from "../../Context/ContactContext";
import HeaderChat from "../HeaderChat/HeaderChat"
import Message from "../Message/Message"
import SendingMessage from "../SendingMessage/SendingMessage"
import { etiquetaDia, claveDia } from "../../utils/formatDate";

export default function ChatSelected ({contact, messages}) {
    const {sendMessage} = useContext(ContactContext)
    const finDeLista = useRef(null)
    const grupos = agruparPorDia(messages)

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
                {grupos.map((grupo) => (
                    <div className="day-group" key={grupo.clave}>
                        <div className="day-separator">
                            <span className="day-separator-pill">
                                {etiquetaDia(grupo.mensajes[0].created_at)}
                            </span>
                        </div>
                        {grupo.mensajes.map((mensaje, i) => (
                            <Message
                                key= {mensaje.id}
                                text= {mensaje.text}
                                isOutgoing={mensaje.isOutgoing}
                                created_at={mensaje.created_at}
                                status={mensaje.status}
                                esPrimero={
                                    i === 0 ||
                                    grupo.mensajes[i - 1].isOutgoing !== mensaje.isOutgoing
                                }
                            />
                        ))}
                    </div>
                ))}
                <div ref= {finDeLista}></div>
            </div>
            <SendingMessage onSend={handleSend}/>
        </div>
    )
}

function agruparPorDia(mensajes) {
    const grupos = []
    for (const mensaje of mensajes) {
        const clave = claveDia(mensaje.created_at)
        const ultimo = grupos[grupos.length - 1]
        if (ultimo && ultimo.clave === clave) {
            ultimo.mensajes.push(mensaje)
        } else {
            grupos.push({ clave, mensajes: [mensaje]})
        }
    }
    return grupos
}