import * as React from "react";
import { useState, useEffect } from "react";

import SearchList from "../../components/Search-list";

const Search = ({ params }) => {
    const param = params[`*`]
    const [data, setData] = useState('');
    const [status, setStatus] = useState('');
   
    useEffect(() => {
        setStatus('Loading');
        const searchMovie = async () => {
            await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.GATSBY_API_KEY}&query=${param}&page=1`)
            .then((response) => {
                if(!response.ok) {
                    setStatus(response.ok)  
                    throw new Error(response.status);
                } 
                else {
                    setStatus(response.ok)
                    return response.json();
                }
            })
            .then(data => {
                setData(data)
            })
        }
        searchMovie(); 
    }, [])
    console.log("data", data)
  return (
    <div>
        {status === true ? (
            data && data?.results?.map((item) => (
                <SearchList key={item.id} item={item} />
            ))
        ):(
            <div>Search failed</div>
        )
        }
    </div>
  )
}

export default Search;
