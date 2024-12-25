import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Products = () => {
  return (
    <div className='w-[50%] mx-auto bg-gray-600 p-10 rounded mt-10'>
      Welcome to Services Page
      <div className='flex flex-col mb-5'>
        <Link to={"/products/clothes"} className="hover:text-gray-200">Clothes</Link>
        <Link to={"/products/electronics"} className="hover:text-gray-200">Electronics</Link>
        <Link to={"/products/fernitures"} className="hover:text-gray-200">Fernitures</Link>
      </div>

      <hr className='h-10'/>
      <Outlet />
    </div>
  )
}

export default Products
