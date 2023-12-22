import React from 'react'
import HomeCards from '../components/HomeCards'
import Footer from '../components/Footer'

function Offers() {
  return (
    <div className='mt-28 '>
    <div className='mx-48'>
    <a className='cursor-pointer'>Home<span className='text-gray-500 cursor-default'> /Offers</span></a>
      <HomeCards title = "Restaurants With Great Offers Near Me"/>
    </div>
      <Footer/>
    </div>
  )
}

export default Offers