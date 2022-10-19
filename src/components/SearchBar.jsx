import React from "react";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";

const SearchBar = () => {
    const [movieName, setMovieName] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const searchMovie = async () => {
          await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.GATSBY_API_KEY}&query=${movieName}&page=1`)
          .then(res => res.json())
          .then(data => console.log("searchMovie",data))
        }
        searchMovie(); 
      }
           
      const handleChange = (event) => {
          event.preventDefault();
          setMovieName(event.target.value);
      }

    return (
        <div className="flex justify-center">
            <form onSubmit={handleSubmit}>
                <input 
                    className="bg-gray-100 rounded text-gray-500 pl-3 w-96"
                    type="search"
                    onChange={handleChange} 
                    placeholder="Search a movie..."
                />
                <button type="submit" >
                  <BsSearch 
                    className="text-gray-400 ml-2 align-middle cursor-pointer hover:opacity-80"
                  />
                </button>
            </form>   
        </div>
    )
}

export default SearchBar;