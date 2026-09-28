import "./HeaderSidebar.css"
import { useContext } from "react"
import { ThemeContext } from "../../Context/ThemeContext"

const THEME_LABELS = {
    Eva01: "Eva 01",
    Eva02: "Eva 02",
    Eva00: "Eva 00",
}

export default function HeaderSidebar() {
    const { theme, setTheme, themes } = useContext(ThemeContext)

    return (
        <header className="header-sidebar">
            <h1 className="header-sidebar-title">
                Whatsapp
            </h1>

            <div className="theme-switcher" role="group" aria-label="Elegir tema">
                {themes.map((t) => (
                    <button
                        key={t}
                        type="button"
                        className={
                            `theme-dot theme-dot--${t}` +
                            (theme === t ? " is-active" : "")
                        }
                        onClick={() => setTheme(t)}
                        aria-label={`Tema ${THEME_LABELS[t] ?? t}`}
                        aria-pressed={theme === t}
                        title={`Tema ${THEME_LABELS[t] ?? t}`}
                    />
                ))}
            </div>
        </header>
    )
}
