//react
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//components
import App from './App.jsx'
//styles
import './index.css'
//contexts
import { CampusProvider } from './context/CampusContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CampusProvider>
      <App />
    </CampusProvider>
  </StrictMode>,
)
