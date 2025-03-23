import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Videoroom from './pages/Room/Videoroom'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/room/:roomId" element={<Videoroom />} />
    </Routes>
  )
}

export default App
