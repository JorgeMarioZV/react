import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import SideEffect from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <SideEffect /> */}
  </StrictMode>,
)

// Por alguna razon funciona si el componente se llama diferente. POr ejemplo con SideEffect. Aunque el archivo sigue siendo App.jsx
