import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from './styles/themes'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={lightTheme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>      
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
)
