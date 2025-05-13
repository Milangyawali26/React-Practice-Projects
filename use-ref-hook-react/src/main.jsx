import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UseRefTutotial from './components/from_thapa_tec_yt/UseRefTutotial.jsx'
import ForwardRefTutorial from './components/from_thapa_tec_yt/ForwardRefTutorial.jsx'
import UseIdTutorial from './components/from_thapa_tec_yt/useId.jsx'
import Context_API from './components/from_thapa_tec_yt/Context_API.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <UseRefTutotial /> */}

{/* < ForwardRefTutorial /> */}

{/* <UseIdTutorial /> */}

<Context_API />

  </StrictMode>,
)
