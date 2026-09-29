import "./HeaderSidebar.css"
/* import { useContext } from "react"
import { ThemeContext } from "../../Context/ThemeContext" */

const THEME_LABELS = {
    Eva01: "Eva 01",
    Eva02: "Eva 02",
    Eva00: "Eva 00",
}

export default function HeaderSidebar() {
/*     const { theme, setTheme, themes } = useContext(ThemeContext) */

    return (
        <header className="header-sidebar">
            <div className="header-actions">               
                <div className="header-sidebar-title-container">
                    <span className="header-sidebar-title">
                        WhatsApp
                    </span>
                </div>
                <div className="header-btn">
                    <button type="button" className="header-icon-btn"
                        title="Menú" aria-label="Menú">
                        <svg viewBox="0 0 24 24" width="24" height="24"
                            aria-hidden="true" focusable="false">
                            <path fill="currentColor"
                                d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                        </svg>
                    </button>
                    <button type="button" className="header-icon-btn-add"
                        title="Nuevo chat" aria-label="Nuevo chat">
                        <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" fill="currentColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>wds-ic-new-chat-filled</title><path fill="currentColor" fill-rule="evenodd" d="M19.33 4C20.81 4 22 5.2 22 6.67v10.66c0 1.48-1.2 2.67-2.67 2.67H5.67A2.67 2.67 0 0 1 3 17.33V8.85L.94 5.53A1 1 0 0 1 1.8 4h17.54Zm-9.8 9h1.98v1.97c0 .43.25.85.67.98a1 1 0 0 0 1.31-.94v-2.02h1.98c.43 0 .85-.25.98-.67a1 1 0 0 0-.94-1.31h-2.02V9.03c0-.43-.25-.85-.67-.98a1 1 0 0 0-1.31.94v2.02H9.49a1 1 0 0 0-.94 1.31c.13.42.55.67.98.67Z" clip-rule="evenodd"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    )
}
