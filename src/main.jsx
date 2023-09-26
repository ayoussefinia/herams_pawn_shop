import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
 import  Auth0ProviderWithHistory  from './auth/auth0-provider-with-history';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
     <Auth0ProviderWithHistory>
         <App />
      </Auth0ProviderWithHistory>
    </BrowserRouter >
  </React.StrictMode>,

)
