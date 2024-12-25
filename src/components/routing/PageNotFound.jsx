import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
    return (
        <div className='w-[50%] mx-auto bg-gray-600 p-10 rounded mt-10 flex flex-col items-center'>
            <h1 className='text-3xl'>404</h1>
            <h1 className='text-3xl mb-5'>Page Not Found</h1>
            <Link to={"/products"} className='px-8 py-2 bg-red-500 text-white rounded-lg'>Back</Link>
        </div>
    )
}

export default PageNotFound
