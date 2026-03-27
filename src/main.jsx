import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ECommerceProvider } from './context/ECommerceProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <ECommerceProvider>
     <App />
   </ECommerceProvider>
  </StrictMode>,
)
