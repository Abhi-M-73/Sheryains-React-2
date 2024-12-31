import axios from '../../utils/axiosconfig';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ProductDetails = () => {
  const [details, setDetails] = useState(null);
  const [error, setError] = useState(null);

  const { id } = useParams(); // Get the product ID from the URL
  const navigate = useNavigate();

  useEffect(() => {
    const getDetails = async () => {
        try {
          const res = await axios.get(`/products/${id}`);
          setDetails(res.data);
        } catch (error) {
          console.log('Error fetching product details:', error.response || error.message);
          setError('Failed to load product details');
        }
      };
      
      

    getDetails();
  }, [id]);

  if (error) {
    return (
      <div className='w-[50%] mx-auto bg-red-600 p-10 rounded mt-10 text-white'>
        <h1>{error}</h1>
        <button onClick={() => navigate(-1)} className='px-8 py-2 bg-gray-500 rounded-lg'>
          Back
        </button>
      </div>
    );
  }

  if (!details) {
    return (
      <div className='w-[50%] mx-auto bg-gray-600 p-10 rounded mt-10 text-white'>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className='w-[50%] mx-auto bg-gray-600 p-10 rounded mt-10'>
      <h1 className='text-black text-2xl font-bold mb-4'>Product Details</h1>
      <div>
        <h2 className='text-white text-xl mb-4'>Product ID: {id}</h2>
        {details.image && <img src={details.image} alt="Product" className='mb-4 rounded-lg h-60 w-52' />}
        <p className='text-white'>{details.description || 'No description available'}</p>
        <button onClick={() => navigate(-1)} className='px-8 py-2 bg-green-500 text-white rounded-lg mt-4'>
          Back
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
