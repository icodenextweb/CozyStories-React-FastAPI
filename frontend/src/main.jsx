import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from "react-router-dom";
import './css/index.css'
import './css/App.css'
import Home from './pages/Home.jsx'
import AppRoutes from "./routes/AppRoutes";


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Router>
      <AppRoutes />
    </Router>
  </StrictMode>,
)
v