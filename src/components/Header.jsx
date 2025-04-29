import React from 'react'
import Navbar from './Navbar'
import {assets} from '../assets/assets'


const Header = () => {
  return (
    <div className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden'>
      <img src={assets.header_img} alt="header" className='w-full h-full object-cover absolute -z-10' />
      <div className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white'> 
        <h2 className='text-2xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20 font-[Open-Sane]'>Explore Homes and Properties that fit for you</h2>
        <div className='space-x-6 mt-16'>
          <a href='#Projects' className='border border-white px-8 py-3 rounded'>Projects</a>
          <a href='#Contact' className='bg-blue-600 border-white px-8 py-3 rounded'>Contact Us</a>
        </div>

      </div>
      <Navbar/>


    </div>
  )
}

export default Header