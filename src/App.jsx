import React from 'react'
import Navbar from './components/routing/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/routing/Home'
import Products from './components/routing/Products'
import Contact from './components/routing/Contact'
import About from './components/routing/About'
import ProductDetails from './components/routing/ProductDetails'
import PageNotFound from './components/routing/PageNotFound'

const App = () => {

  return (
    <div className='text-white'>

      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} >
          <Route path='/products/:category' element={<ProductDetails />} />
        </Route>
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>

    </div>
  )
}

export default App
