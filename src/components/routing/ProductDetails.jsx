import React from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'

const ProductDetails = () => {

    const navigate = useNavigate();
    const params = useParams();
    const location = useLocation();
    console.log(location)

    return (
        <div className='w-[50%] mx-auto bg-gray-600 p-10 rounded mt-10'>
            <h1 className='mb-1'>Params : {params.category.toLocaleUpperCase()}</h1>
            <h1 className='mb-5'>location : {location.pathname}</h1>
            <button onClick={()=> navigate(-1)} className='px-8 py-2 bg-green-500 text-white rounded-lg'>Back</button>
        </div>
    )
}

export default ProductDetails
