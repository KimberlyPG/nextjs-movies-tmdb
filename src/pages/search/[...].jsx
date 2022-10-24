import * as React from "react";
import { useState, useEffect } from "react";

import SearchList from "../../components/Search-list";
import Topbar from "../../components/Topbar";

const Search = ({ params }) => {
    const param = params[`*`]
    const [data, setData] = useState('');
    const [status, setStatus] = useState('');
    const [moviesView, setMoviesView] = useState(true);
   
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
    }, [param])
    console.log("data", data)

  return (
    <div>
        {status === true ? (
            <>
            <div className="grid justify-items-center">
                <div className="pt-10 w-4/5">
                    <Topbar setMoviesView={setMoviesView}/>
                </div>
                <h2 className="pt-5 flex text-2xl font-bold text-gray-600">Search result for {`${param}`}</h2>
                <div className="grid grid-cols-5 p-10 w-4/5">
                    {data && data?.results?.map((item) => (
                        <SearchList key={item.id} item={item} />
                    ))}
                </div>
            </div>
            </>
        ):(
            <div>Loading</div>
        )
        }
    </div>
  )
}

export default Search;
