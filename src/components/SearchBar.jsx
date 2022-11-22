import React from "react";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { navigate } from "gatsby";

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
        <div className="flex justify-end mr-3">
            <form class="relative lg:w-96 xs:w-full xs:text-xs"  onSubmit={navigateToResults}>
                <input 
                    class="peer cursor-pointer relative z-10 w-9 h-9 rounded-full pl-8 border bg-transparent
                    outline-none xs:focus:w-full xs:focus:cursor-text xs:focus:border-cyan-400 xs:focus:pl-16 focus:justify-start focus:pr-4
                    lg:w-full lg:pl-16 placeholder:italic" 
                    type="search" 
                    onChange={handleChange}
                    value={showName}
                    placeholder="Search for a show... "
                />
                <BsSearch 
                    className="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent px-3.5 peer-focus:border-gray-300 peer-focus:text-cyan-400
                    text-gray-400 focus:text-cyan-400 text-lg align-middle cursor-pointer hover:opacity-80 p-2 pl-2"
                />
            </form>
        </div>
    )
}

export default SearchBar;
