import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppHello from './AppHello.jsx'
import ImportantGreeting from './Greeting.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <AppHello /> */}
    <ImportantGreeting />
  </StrictMode>,
)
