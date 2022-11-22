import React from 'react'
import { navigate } from "gatsby";

import SearchBar from './SearchBar'

import logo from '../assets/logo.svg'

const Topbar = () => {

return (
    <div className='flex lg:h-14 xs:h-12 items-center shadow-md'>
        <img
            className='peer-focus:hidden lg:w-36 xs:w-24 cursor-pointer ml-3' 
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
