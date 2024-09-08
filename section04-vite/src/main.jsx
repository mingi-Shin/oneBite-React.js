import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App /> 
  </StrictMode>,
)

// APP 컴포넌트를 랜더링하고있다.
