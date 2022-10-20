import * as React from "react";
import { useState, useEffect } from "react";
import { navigate } from "gatsby";

const SearchList = ({ params }) => {
    const param = params[`*`]
    const [data, setData] = useState('');
    const [status, setStatus] = useState('');
   
    useEffect(() => {
        const searchMovie = async () => {
            await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.GATSBY_API_KEY}&query=${param}&page=1`)
            .then(res => res.json())
            .then(data => setData(data))
            
            // setCurrentQuery();
            setStatus(true);
        }
        searchMovie(); 
    }, [])
    
  return (
    <div>
        {status === true ? (
            data && data?.results?.map((item) => (
                <div>
                    <p>{item.title}</p>
                    <img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${item.poster_path}`} alt="" />
                </div>
            ))
        ):(
            <div>Search failed</div>
        )
        }
    </div>
  )
}

export default SearchList;
