import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './global.css'
import App from './App.jsx'
import { ThemeContextProvider } from './Context/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </BrowserRouter>
)
