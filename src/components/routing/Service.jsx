import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNewService } from '../../store/reducers/serviceSlice';
import { asyncRemoveService } from '../../store/actions/serviceAction';

const Service = () => {
  const { data } = useSelector(state => state.services);
  const dispatch = useDispatch();


  const handleAddService = () => {
    const newService = { id: 4, name: 'Service 4', price: 400 }
    dispatch(addNewService(newService));
  }


  return (
    <div className='w-[50%] mx-auto bg-gray-600 p-10 rounded mt-10'>
      <h1 className='text-center text-2xl mb-5'>Welcome to Service Page</h1>
      <div>
        {
          data.map((service) => (
            <div key={service.id} className='border-b py-2'>
              <h2>{service.name}</h2>
              <p>Price: ${service.price}</p>
            </div>
          ))
        }
      </div>
      <button onClick={handleAddService} className='px-4 py-2 bg-purple-600 text-white mt-5'>Add Service</button>
      <button onClick={() => dispatch(asyncRemoveService(1))} className='px-4 py-2 bg-purple-600 text-white mt-5 ml-2'>Remove Service</button>
    </div>
  )
}

export default Service
