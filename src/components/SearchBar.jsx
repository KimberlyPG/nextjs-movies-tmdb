import React from "react";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { navigate } from "gatsby";
import { Link } from "gatsby";

const SearchBar = () => {
    const [showName, setShowName] = useState('');
      
    const handleChange = (event) => {
        event.preventDefault();
        setShowName(event.target.value);
    }

    const navigateToResults = (event) => {
        event.preventDefault();
        navigate(`/search/${showName}`)
        setShowName('');
    }

    return (
        <div className="flex justify-center">
            <form class="relative mx-auto lg:w-96 xs:w-full"  onSubmit={navigateToResults}>
                <input 
                    class="peer cursor-pointer relative z-10 w-9 h-9 rounded-full pl-9 border bg-transparent
                    outline-none xs:focus:w-full xs:focus:cursor-text xs:focus:border-cyan-400 xs:focus:pl-16 focus:justify-start focus:pr-4
                    lg:w-full lg:pl-16" 
                    type="search" 
                    onChange={handleChange}
                    value={showName}
                    placeholder="Search for a movie or tv show..."
                />
                <svg class="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent 
                    stroke-gray-500 px-3.5 peer-focus:border-gray-300 lg:border-gray-300" viewBox="0 0 24 24" 
                    
                >
                     <BsSearch 
                        className="text-gray-400 focus:text-cyan-400 text-lg align-middle cursor-pointer hover:opacity-80"
                    />
                </svg>
            </form>
        </div>
    )
}

export default SearchBar;