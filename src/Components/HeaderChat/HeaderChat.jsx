import "./HeaderChat.css"

export default function HeaderChat({contact}) {
    return(
        <header className="header-chat">
            <div className="header-chat-avatar">
                <img 
                    src={contact.image} 
                    className="avatar-image"
                    alt={contact.name} />
            </div>
            <div className="header-chat-info">
                <h2 className="header-chat-name">
                    {contact.name}
                </h2>
                <span className="header-chat-description">
                    haz clic aquí para ver la información de contacto
                </span>
            </div>
        </header>
    )
}