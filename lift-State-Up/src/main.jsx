import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LiftingState from './LiftingState.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LiftingState/>
  </StrictMode>,
)
