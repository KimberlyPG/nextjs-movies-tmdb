import React from 'react'
import { navigate } from "gatsby";

import SearchBar from './SearchBar'

import logo from '../assets/logo.svg'

const Topbar = () => {
return (
    <div className='flex lg:h-14 xs:h-12 items-center px-8 shadow-md'>
        <img
            className='lg:w-36 xs:w-24 cursor-pointer' 
            src={logo} 
            alt="page logo" 
            onClick={() => navigate('/')}
        />
        <div className='grid lg:justify-center xs:justify-end w-full mt-1'>
            <SearchBar />
        </div>
    </div>
  )
}

export default Topbar;
