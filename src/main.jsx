import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'

import './index.css'

import { UserProvider } from './context/user.context.jsx'
import { ProductxProvider } from './context/products.context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProductxProvider>
          <App />
        </ProductxProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
