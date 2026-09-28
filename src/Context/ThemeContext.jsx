import { createContext, useEffect, useState } from "react";

const THEMES = ["Eva01", "Eva02", "Eva00"];
const DEFAULT_THEME = "Eva01";
const STORAGE_KEY = "theme";

function getStoredTheme() {
    try {
        const stored = window.localStorage.getItem(STORAGE_KEY);
        if (THEMES.includes(stored)) return stored;
    } catch {
        // localStorage no disponible (modo privado, etc.)
    }
    return DEFAULT_THEME;
}

export const ThemeContext = createContext();

export function ThemeContextProvider({ children }) {
    const [theme, setTheme] = useState(getStoredTheme);

    // Aplica el tema al <html> y lo persiste
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        try {
            window.localStorage.setItem(STORAGE_KEY, theme);
        } catch {
            // no se pudo persistir, seguimos con el tema en memoria
        }
    }, [theme]);

    const providerValues = {
        theme,
        setTheme,
        themes: THEMES,
    };

    return (
        <ThemeContext.Provider value={providerValues}>
            {children}
        </ThemeContext.Provider>
    );
}
