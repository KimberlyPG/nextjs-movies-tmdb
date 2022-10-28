import React from 'react'

import SearchBar from './SearchBar'

import logo from '../assets/logo.svg'

const Topbar = () => {
return (
    <div className='flex bg-[#FFFFFF] h-14 items-center px-8'>
        <img
            className='w-36' 
            src={logo} 
            alt="page logo" 
        />
        <div className='grid justify-center w-screen mt-1'>
            <SearchBar />
        </div>
    </div>
  )
}

export default Topbar;
