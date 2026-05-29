import React from 'react'
import ReactDOM from 'react-dom/client'
import './app/globals.css'
import App from './App'
import { ErrorBoundary } from './app/error'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
)
