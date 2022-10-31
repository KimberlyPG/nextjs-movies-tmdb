import React from "react";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { navigate } from "gatsby";

const SearchBar = () => {
    const [movieName, setMovieName] = useState('');
      
    const handleChange = (event) => {
        event.preventDefault();
        setMovieName(event.target.value);
    }

    return (
        <div className="flex justify-center">
            <form onSubmit={handleChange}>
                <input 
                    className="bg-gray-100 rounded text-gray-500 pl-3 w-96"
                    type="search"
                    onChange={handleChange} 
                    placeholder="Search a movie..."
                />
                <button 
                    onClick={() => navigate(`/search/${movieName}`)}>
                    <BsSearch 
                        className="text-gray-400 ml-2 align-middle cursor-pointer hover:opacity-80"
                    />
                </button>
            </form>   
        </div>
    )
}

export default SearchBar;