import axios from '../../utils/axiosconfig';
import React, { useEffect, useState } from 'react'
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

  useEffect(() => {
    getAllProducts();
  }, [products]);

  return (
    <div className='w-[50%] mx-auto bg-gray-500 p-10 rounded mt-10'>
      <h1 className='text-2xl font-semibold mb-4 text-center'>All Products</h1>
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
