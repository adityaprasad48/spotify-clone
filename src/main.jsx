import { StateProvider } from "./StateProvider";
import reducer, { initialState } from "./store/reducer.js";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <StateProvider initialState={initialState} reducer={reducer}>
       <App />
     </StateProvider>
  </StrictMode>,
)

