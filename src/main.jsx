import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Welcome from "./pages/Welcome.jsx";
import Nopage from "./pages/Nopage.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route index path="/" element={<Welcome />}/>
    <Route path="/buylist" element={<App />} />
    <Route path="*" element={<Nopage />} />
  </Routes>
</BrowserRouter>
)
