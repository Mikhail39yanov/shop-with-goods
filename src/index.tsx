import './normalize.css'
import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'

import './processes/model/init'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)

reportWebVitals()
