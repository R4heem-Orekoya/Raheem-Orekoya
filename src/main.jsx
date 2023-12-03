import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './assets/index.css'
import { BlogContextProvider } from './context/blogContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BlogContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </BlogContextProvider>
  </React.StrictMode>,
)
