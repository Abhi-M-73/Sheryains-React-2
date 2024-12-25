import React from 'react'
import FeedbackForm from '../routing/FeedbackForm'


const Home = () => {
  return (
    <div className='w-[50%] mx-auto bg-gray-600 p-10 rounded mt-10'>
      Welcome to Home Page
      <FeedbackForm />
    </div>
  )
};

export default Home;

