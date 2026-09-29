import "./Message.css"
import { formatearHora } from "../../utils/formatDate"



export default function Message({text, isOutgoing, created_at, status, esPrimero}) {
    const esVisto = status === "seen"
    const clases = [
        "message",
        isOutgoing ? "message--out" : "message--in",
        esPrimero ? "message--first" : "message--continuacion",
    ].join(" ")

    return (
        <div className={clases}>
            <p className="message-text">
                {text}
                <span className="message-meta">
                    <span className="message-time">{formatearHora(created_at)}</span>
                    {isOutgoing&& (
                        <span className={`message-status ${esVisto ? "is-seen" : ""}`}>
                                {esVisto ? "✓✓" : "✓"}
                            </span>
                        )}
                </span>
            </p>
        </div>
    )
}
