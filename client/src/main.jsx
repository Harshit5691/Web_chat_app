import React from 'react'
import ReactDom from 'react-dom/client'
import App from './App.jsx'
import {CssBaseline} from '@mui/material'
import {HelmetProvider} from 'react-helmet-async'
import {Provider} from 'react-redux';
import store from './redux/store.js'
ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <HelmetProvider>
        <CssBaseline />
        <div onContextMenu={(e)=>e.preventDefault()}>
          <App />
        </div>
      </HelmetProvider>
    </Provider>
  </React.StrictMode>,
)
