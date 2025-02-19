import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './main.css'
import { Provider } from 'react-redux'
import { store } from './stores/index'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
)
