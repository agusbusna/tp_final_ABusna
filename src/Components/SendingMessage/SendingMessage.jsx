import { useState } from "react"
import "./SendingMessage.css"

export default function SendingMessage({onSend}) {
    const [texto, setTexto] = useState("")

    function handleSubmit(evento){
        evento.preventDefault()
        const content = texto.trim()
        if (!content) return
        onSend(content)
        setTexto("")

    }
    return (
        <form 
            className="sending-message" 
            onSubmit={handleSubmit}>
                <input 
                    type="text"
                    className="sending-message-input"
                    placeholder="Escribe un mensaje"
                    value={texto}
                    onChange={(evento) => setTexto(evento.target.value)}
                />
                <button 
                    type="submit"
                    className="sending-message-btn"
                    disabled={texto.trim() === ""}
                    aria-label="Enviar mensaje"
                >
                    ➤
                </button>
        </form>
    )
}
