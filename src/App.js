import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Info from './pages/Info'
import Navbar from './components/Navbar/Navbar'
import './App.css'

function App() {
  
  return (
    <div className='content'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/info' element={<Info />} />
        <Route path='/*' element={<NotFound/>} />
      </Routes>    
    </div>
  );
}

export default App;
