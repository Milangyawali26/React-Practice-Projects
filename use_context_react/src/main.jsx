import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './practice1/components/App/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
