import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import App from './App'
import './styles/index.css'

// Register service worker for asset caching (production only)
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', async () => {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js', {
        updateViaCache: 'none', // Always fetch sw.js from network, bypass HTTP cache
      })

      // Check for updates immediately and periodically
      registration.update()

      // Check for updates every 60 minutes
      setInterval(() => {
        registration.update()
      }, 60 * 60 * 1000)

    } catch (error) {
      // Silent fail - caching is an enhancement, not critical
    }
  })
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
)
