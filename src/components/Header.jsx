import React from 'react'
import Navbar from './Navbar'
import {assets} from '../assets/assets'


const Header = () => {
  return (
    <div className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden'>
      <img src={assets.header} alt="header" className='w-full h-full object-cover absolute -z-10' />
      
      <Navbar/>


    </div>
  )
}

export default Header