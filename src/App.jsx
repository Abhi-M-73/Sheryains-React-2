import React from 'react'
import Navbar from './components/routing/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/routing/Home'
import Services from './components/routing/Services'
import Contact from './components/routing/Contact'
import About from './components/routing/About'

const App = () => {
  return (
    <div className='text-white'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/services/:id' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      
    </div>
  )
}

export default App
