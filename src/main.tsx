import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/variables.css'
import './index.css'
import App from './App.tsx'
import FontScaler from './script/ScreenScale.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FontScaler />
    <App />
  </StrictMode>
)
