import React from 'react'
import { Link } from 'react-router-dom'

const Services = () => {
  return (
    <div className='w-[50%] mx-auto bg-gray-600 p-10 rounded mt-10'>
      Welcome to Services Page
      <div className='flex flex-col'>
        <Link to={"/services/1"} className="hover:text-gray-200">Service 1</Link>
        <Link to={"/services/2"} className="hover:text-gray-200">Service 2</Link>
        <Link to={"/services/3"} className="hover:text-gray-200">Service 3</Link>
      </div>
    </div>
  )
}

export default Services
