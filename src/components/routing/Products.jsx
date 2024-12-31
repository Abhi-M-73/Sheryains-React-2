import axios from '../../utils/axiosconfig';
import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

const Products = () => {
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    try {
      const res = await axios.get('/products');
      setProducts(res.data);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='w-[50%] mx-auto bg-gray-500 p-10 rounded mt-10'>
      <div className='text-center'><button onClick={getAllProducts} className='w-fit px-6 py-2 bg-indigo-600 text-white rounded mb-5'>Get Data</button></div>
      <div className='flex flex-wrap gap-3'>
        {
          products.map((item, index) => (
            <Link to={`/products/${item.id}`} key={index} className='w-40 mb-5 bg-gray-700 p-2'>
              <img src={item.image} alt={item.title} className='h-40 w-40' />
              <h1 className="hover:text-gray-200 w-40 p-2">{item.title}</h1>
            </Link>

          ))
        }
      </div>


      <hr className='h-10' />
      <Outlet />
    </div>
  )
}

export default Products
