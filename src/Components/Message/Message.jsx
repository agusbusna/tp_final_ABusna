import "./Message.css"
import { formatearHora } from "../../utils/formatDate"



export default function Message({text, isOutgoing, created_at, status}) {
    const esVisto = status === "seen"

    return (
        <div className={`message ${isOutgoing ? "message--out" : "message--in"}`}>
            <p className="message-text">{text}</p>

            <div className="message-meta">
                <span className="message-time">{formatearHora(created_at)}</span>
                {
                    isOutgoing&& (
                        <span className={`message-status ${esVisto ? "is-seen" : ""}`}>
                            {esVisto ? "✓✓" : "✓"}
                        </span>
                    )}
            </div>
        </div>
    )
}
